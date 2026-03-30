const swaggerDocument={
    openapi:'3.0.0',
    info:{
        title:'MTIT-A2 E-commerce API',
        version:'1.0.0',
        description:'API documentation for the MTIT-A2 backend service.'
    },
    servers:[
        {
            url:'http://localhost:8000',
            description:'Local development server'
        }
    ],
    paths:{
        '/':{
            get:{
                tags:['Health'],
                summary:'Health check',
                description:'Returns a simple message indicating that the server is running.',
                responses:{
                    200:{
                        description:'Server is running'
                    }
                }
            }
        },
        '/auth/signup':{
            post:{
                tags:['Auth'],
                summary:'User signup',
                description:'Registers a new user account.',
                requestBody:{
                    required:true,
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/UserSignupRequest'
                            },
                            example:{
                                name:'John Doe',
                                email:'john@example.com',
                                password:'Password123!'
                            }
                        }
                    }
                },
                responses:{
                    201:{description:'User signed up successfully'},
                    400:{description:'Validation error'}
                }
            }
        },
        '/auth/login':{
            post:{
                tags:['Auth'],
                summary:'User login',
                description:'Logs in a user with email and password.',
                requestBody:{
                    required:true,
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/UserLoginRequest'
                            },
                            example:{
                                email:'john@example.com',
                                password:'Password123!'
                            }
                        }
                    }
                },
                responses:{
                    200:{description:'User logged in successfully'},
                    401:{description:'Invalid credentials'}
                }
            }
        },
        '/auth/verify-otp':{
            post:{
                tags:['Auth'],
                summary:'Verify OTP',
                description:'Verifies the OTP sent to the user during signup.',
                requestBody:{
                    required:true,
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/VerifyOtpRequest'
                            },
                            example:{
                                userId:'665c65e8a06f5c2f4e4e1234',
                                otp:'123456'
                            }
                        }
                    }
                },
                responses:{
                    200:{description:'OTP verified successfully'},
                    400:{description:'Invalid or expired OTP'}
                }
            }
        },
        '/auth/resend-otp':{
            post:{
                tags:['Auth'],
                summary:'Resend OTP',
                description:'Resends a new OTP to the user.',
                requestBody:{
                    required:true,
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/ResendOtpRequest'
                            },
                            example:{
                                user:'665c65e8a06f5c2f4e4e1234'
                            }
                        }
                    }
                },
                responses:{
                    201:{description:'OTP resent successfully'}
                }
            }
        },
        '/auth/forgot-password':{
            post:{
                tags:['Auth'],
                summary:'Forgot password',
                description:'Initiates the forgot password flow for a user.',
                requestBody:{
                    required:true,
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/ForgotPasswordRequest'
                            },
                            example:{
                                email:'john@example.com'
                            }
                        }
                    }
                },
                responses:{
                    200:{description:'Password reset email / OTP sent'}
                }
            }
        },
        '/auth/reset-password':{
            post:{
                tags:['Auth'],
                summary:'Reset password',
                description:'Resets the user password using a valid token/OTP.',
                requestBody:{
                    required:true,
                    content:{
                        'application/json':{
                            schema:{
                                $ref:'#/components/schemas/ResetPasswordRequest'
                            },
                            example:{
                                userId:'665c65e8a06f5c2f4e4e1234',
                                token:'reset-token-from-email',
                                password:'NewPassword123!'
                            }
                        }
                    }
                },
                responses:{
                    200:{description:'Password reset successfully'},
                    400:{description:'Invalid or expired token'}
                }
            }
        },
        '/auth/check-auth':{
            get:{
                tags:['Auth'],
                summary:'Check auth',
                description:'Checks if the current user session/token is valid.',
                responses:{
                    200:{description:'User is authenticated'},
                    401:{description:'User is not authenticated'}
                }
            }
        },
        '/auth/logout':{
            get:{
                tags:['Auth'],
                summary:'Logout',
                description:'Logs out the current user.',
                responses:{
                    200:{description:'User logged out successfully'}
                }
            }
        },
        '/users/{id}':{
            get:{
                tags:['Users'],
                summary:'Get user by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'},
                        description:'User ID'
                    }
                ],
                responses:{
                    200:{description:'User details'},
                    404:{description:'User not found'}
                }
            },
            patch:{
                tags:['Users'],
                summary:'Update user by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'},
                        description:'User ID'
                    }
                ],
                responses:{
                    200:{description:'User updated successfully'},
                    404:{description:'User not found'}
                }
            }
        },
        '/products':{
            get:{
                tags:['Products'],
                summary:'Get all products',
                responses:{
                    200:{description:'List of products'}
                }
            },
            post:{
                tags:['Products'],
                summary:'Create product',
                responses:{
                    200:{description:'Product created successfully'}
                }
            }
        },
        '/products/{id}':{
            get:{
                tags:['Products'],
                summary:'Get product by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Product details'},
                    404:{description:'Product not found'}
                }
            },
            patch:{
                tags:['Products'],
                summary:'Update product by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Product updated successfully'},
                    404:{description:'Product not found'}
                }
            },
            delete:{
                tags:['Products'],
                summary:'Delete product by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Product deleted successfully'},
                    404:{description:'Product not found'}
                }
            }
        },
        '/products/undelete/{id}':{
            patch:{
                tags:['Products'],
                summary:'Undelete product by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Product restored successfully'},
                    404:{description:'Product not found'}
                }
            }
        },
        '/orders':{
            post:{
                tags:['Orders'],
                summary:'Create order',
                responses:{
                    200:{description:'Order created successfully'}
                }
            },
            get:{
                tags:['Orders'],
                summary:'Get all orders',
                responses:{
                    200:{description:'List of orders'}
                }
            }
        },
        '/orders/user/{id}':{
            get:{
                tags:['Orders'],
                summary:'Get orders by user ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'List of user orders'}
                }
            }
        },
        '/orders/{id}':{
            patch:{
                tags:['Orders'],
                summary:'Update order by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Order updated successfully'},
                    404:{description:'Order not found'}
                }
            }
        },
        '/cart':{
            post:{
                tags:['Cart'],
                summary:'Create cart item',
                responses:{
                    200:{description:'Cart item created successfully'}
                }
            }
        },
        '/cart/user/{id}':{
            get:{
                tags:['Cart'],
                summary:'Get cart by user ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'User cart items'}
                }
            },
            delete:{
                tags:['Cart'],
                summary:'Delete cart by user ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'User cart cleared'}
                }
            }
        },
        '/cart/{id}':{
            patch:{
                tags:['Cart'],
                summary:'Update cart item by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Cart item updated successfully'},
                    404:{description:'Cart item not found'}
                }
            },
            delete:{
                tags:['Cart'],
                summary:'Delete cart item by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Cart item deleted successfully'},
                    404:{description:'Cart item not found'}
                }
            }
        },
        '/brands':{
            get:{
                tags:['Brands'],
                summary:'Get all brands',
                responses:{
                    200:{description:'List of brands'}
                }
            }
        },
        '/categories':{
            get:{
                tags:['Categories'],
                summary:'Get all categories',
                responses:{
                    200:{description:'List of categories'}
                }
            }
        },
        '/address':{
            post:{
                tags:['Address'],
                summary:'Create address',
                responses:{
                    200:{description:'Address created successfully'}
                }
            }
        },
        '/address/user/{id}':{
            get:{
                tags:['Address'],
                summary:'Get addresses by user ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'List of user addresses'}
                }
            }
        },
        '/address/{id}':{
            patch:{
                tags:['Address'],
                summary:'Update address by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Address updated successfully'},
                    404:{description:'Address not found'}
                }
            },
            delete:{
                tags:['Address'],
                summary:'Delete address by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Address deleted successfully'},
                    404:{description:'Address not found'}
                }
            }
        },
        '/reviews':{
            post:{
                tags:['Reviews'],
                summary:'Create review',
                responses:{
                    200:{description:'Review created successfully'}
                }
            }
        },
        '/reviews/product/{id}':{
            get:{
                tags:['Reviews'],
                summary:'Get reviews by product ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'List of product reviews'}
                }
            }
        },
        '/reviews/{id}':{
            patch:{
                tags:['Reviews'],
                summary:'Update review by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Review updated successfully'},
                    404:{description:'Review not found'}
                }
            },
            delete:{
                tags:['Reviews'],
                summary:'Delete review by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Review deleted successfully'},
                    404:{description:'Review not found'}
                }
            }
        },
        '/wishlist':{
            post:{
                tags:['Wishlist'],
                summary:'Create wishlist item',
                responses:{
                    200:{description:'Wishlist item created successfully'}
                }
            }
        },
        '/wishlist/user/{id}':{
            get:{
                tags:['Wishlist'],
                summary:'Get wishlist by user ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'User wishlist items'}
                }
            }
        },
        '/wishlist/{id}':{
            patch:{
                tags:['Wishlist'],
                summary:'Update wishlist item by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Wishlist item updated successfully'},
                    404:{description:'Wishlist item not found'}
                }
            },
            delete:{
                tags:['Wishlist'],
                summary:'Delete wishlist item by ID',
                parameters:[
                    {
                        name:'id',
                        in:'path',
                        required:true,
                        schema:{type:'string'}
                    }
                ],
                responses:{
                    200:{description:'Wishlist item deleted successfully'},
                    404:{description:'Wishlist item not found'}
                }
            }
        }
    },
    components:{
        schemas:{
            UserSignupRequest:{
                type:'object',
                required:['name','email','password'],
                properties:{
                    name:{type:'string'},
                    email:{type:'string',format:'email'},
                    password:{type:'string',format:'password'}
                }
            },
            UserLoginRequest:{
                type:'object',
                required:['email','password'],
                properties:{
                    email:{type:'string',format:'email'},
                    password:{type:'string',format:'password'}
                }
            },
            VerifyOtpRequest:{
                type:'object',
                required:['userId','otp'],
                properties:{
                    userId:{type:'string',description:'User ID for whom the OTP was generated'},
                    otp:{type:'string',description:'One Time Password received by the user'}
                }
            },
            ResendOtpRequest:{
                type:'object',
                required:['user'],
                properties:{
                    user:{type:'string',description:'User ID for which OTP has to be resent'}
                }
            },
            ForgotPasswordRequest:{
                type:'object',
                required:['email'],
                properties:{
                    email:{type:'string',format:'email'}
                }
            },
            ResetPasswordRequest:{
                type:'object',
                required:['userId','token','password'],
                properties:{
                    userId:{type:'string',description:'User ID whose password needs to be reset'},
                    token:{type:'string',description:'Password reset token received via email'},
                    password:{type:'string',format:'password',description:'New password'}
                }
            }
        }
    }
}

module.exports=swaggerDocument

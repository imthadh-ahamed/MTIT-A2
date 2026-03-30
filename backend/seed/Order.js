const Order = require("../models/Order");
const fs = require("fs");

// Base Unsplash CDN helper
const img = (id, w = 500) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const orders = [
  {
    _id: "65c2658db53f820728d0745a",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f5994454",
          title: "Samsung Galaxy Book",
          description:
            "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
          price: 1499,
          discountPercentage: 4.15,
          stockQuantity: 50,
          brand: { _id: "65a7e20102e12c44f59943db", name: "Samsung" },
          category: "65a7e24602e12c44f599442d",
          thumbnail: img("photo-1496181133206-80ce9b88a853"),
          images: [
            img("photo-1496181133206-80ce9b88a853"),
            img("photo-1525547719571-a2d4ac8945e2"),
            img("photo-1593642632559-0c6d3fc62b89"),
            img("photo-1588702547923-7408aa47d048"),
          ],
          isDeleted: false,
          updatedAt: "2024-02-05T09:34:30.107Z",
        },
        quantity: 1,
        _id: "65c26581b53f820728d07456",
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "CARD",
    total: 1509.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c265c6b53f820728d0749c",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        _id: "65c265a2b53f820728d07474",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f599445d",
          title: "Hyaluronic Acid Serum",
          description:
            "L'Oréal Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
          price: 19,
          discountPercentage: 13.31,
          stockQuantity: 110,
          brand: {
            _id: "65a7e20102e12c44f59943e6",
            name: "L'Oreal Paris",
          },
          category: "65a7e24602e12c44f599442f",
          thumbnail: img("photo-1556228453-efd6c1ff04f6"),
          images: [
            img("photo-1556228453-efd6c1ff04f6"),
            img("photo-1620916566398-39f1143ab7be"),
            img("photo-1612817288484-6f916006741a"),
            img("photo-1556228720-195a672e8a03"),
            img("photo-1556228453-efd6c1ff04f6"),
          ],
          isDeleted: false,
        },
        quantity: 2,
      },
      {
        _id: "65c265b9b53f820728d0748f",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f599445e",
          title: "Tree Oil 30ml",
          description:
            "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria",
          price: 12,
          discountPercentage: 4.09,
          stockQuantity: 78,
          brand: { _id: "65a7e20102e12c44f59943e7", name: "Hemani Tea" },
          category: "65a7e24602e12c44f599442f",
          thumbnail: img("photo-1608248543803-ba4f8c70ae0b"),
          images: [
            img("photo-1608248543803-ba4f8c70ae0b"),
            img("photo-1542736705-3b5edab0bafc"),
            img("photo-1516131206008-dd041a9764fd"),
            img("photo-1583248369069-9d91f1640fe6"),
          ],
          isDeleted: false,
        },
        quantity: 3,
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "COD",
    total: 84.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c265feb53f820728d074b4",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f59944b0",
          title: "American Vintage Wood Pendant Light",
          description:
            "American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante",
          price: 46,
          discountPercentage: 8.84,
          stockQuantity: 138,
          brand: { _id: "65a7e20102e12c44f5994425", name: "Ifei Home" },
          category: "65a7e24602e12c44f599443f",
          thumbnail: img("photo-1524484485831-a92ffc0de03f"),
          images: [
            img("photo-1524484485831-a92ffc0de03f"),
            img("photo-1507473885765-e6ed057f782c"),
            img("photo-1565814329452-e1efa11c5b89"),
            img("photo-1540932239986-30128078f3c5"),
            img("photo-1524484485831-a92ffc0de03f"),
          ],
          isDeleted: false,
        },
        quantity: 1,
        _id: "65c265edb53f820728d074b0",
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "COD",
    total: 56.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c2667db53f820728d07579",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        _id: "65c26673b53f820728d0756f",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f599446d",
          title: "Sofa for Coffee Cafe",
          description:
            "Rattan Outdoor Furniture Set Waterproof Rattan Sofa for Coffee Cafe",
          price: 50,
          discountPercentage: 15.59,
          stockQuantity: 30,
          brand: {
            _id: "65a7e20102e12c44f59943f6",
            name: "Ratttan Outdoor",
          },
          category: "65a7e24602e12c44f5994432",
          thumbnail: img("photo-1555041469-a586c61ea9bc"),
          images: [
            img("photo-1555041469-a586c61ea9bc"),
            img("photo-1586023492125-27b2c045efd7"),
            img("photo-1567538096630-e0c55bd6374c"),
            img("photo-1549187774-b4e9b0445b41"),
          ],
          isDeleted: false,
        },
        quantity: 1,
      },
    ],
    address: [
      {
        _id: "65c26412e1e1a2106ac8fbd8",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 18th",
        city: "Noida",
        state: "Uttar Pradesh",
        phoneNumber: "9846286159",
        postalCode: "301273",
        country: "India",
        type: "Buisness",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "CARD",
    total: 60.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c266eab53f820728d0763f",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        _id: "65c266dab53f820728d07632",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f59944ae",
          title: "Metal Ceramic Flower Chandelier",
          description:
            "Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp",
          price: 35,
          discountPercentage: 10.94,
          stockQuantity: 146,
          brand: { _id: "65a7e20102e12c44f5994425", name: "Ifei Home" },
          category: "65a7e24602e12c44f599443f",
          thumbnail: img("photo-1558618666-fcd25c85cd64"),
          images: [
            img("photo-1558618666-fcd25c85cd64"),
            img("photo-1571771894821-ce9b6c11b08e"),
            img("photo-1566854193921-2dfcefa1c8cf"),
            img("photo-1506439773649-6e0eb8cfb237"),
            img("photo-1558618666-fcd25c85cd64"),
          ],
          isDeleted: false,
        },
        quantity: 4,
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "COD",
    total: 150.55,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
];

exports.seedOrder = async () => {
  try {
    await Order.insertMany(orders);
    console.log("Order seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
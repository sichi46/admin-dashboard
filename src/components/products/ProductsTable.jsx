import React from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const client = useQueryClient();

  const { isLoading } = useQuery(
    "getAllProducts",
    async () => {
      const res = await axios.get("http://localhost:8000/product/all");
      return res.data;
    },
    {
      onSuccess(data) {
        setFilteredProducts(data);
      },
    }
  );

  const { mutate } = useMutation(
    "deleteProductById",
    async (data) => {
      const id = 7;
      const res = await axios.delete(
        `http://localhost:8000/product/${data.id}`
      );
      return res.data;
    },
    {
      onSuccess() {
        client.invalidateQueries("getAllProducts");
      },
    }
  );

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6 flex-col gap-1 sm:flex-row">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Products...."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray" size={18} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-lest text-xs font-medium text-gray-400 uppercase tracking-wider">
                name
              </th>
              <th className="px-6 py-3 text-lest text-xs font-medium text-gray-400 uppercase tracking-wider">
                category
              </th>
              <th className="px-6 py-3 text-lest text-xs font-medium text-gray-400 uppercase tracking-wider">
                price
              </th>
              <th className="px-6 py-3 text-lest text-xs font-medium text-gray-400 uppercase tracking-wider">
                stock
              </th>
              <th className="px-6 py-3 text-lest text-xs font-medium text-gray-400 uppercase tracking-wider">
                sales
              </th>
              <th className="px-6 py-3 text-lest text-xs font-medium text-gray-400 uppercase tracking-wider">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredProducts?.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  <img
                    className="size-10 rounded-full"
                    src="https://images.unsplash.com/photo-1598371611276-1bc503a270a4?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button>
                    <Edit
                      size={18}
                      className="text-indigo-400 hover:text-indigo-300 mr-2"
                    />
                  </button>
                  <button>
                    <Trash2
                      onClick={() => mutate(product)}
                      size={18}
                      className="text-red-400 hover:text-red-300"
                    />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;

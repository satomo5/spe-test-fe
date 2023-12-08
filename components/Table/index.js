"use client";

import { useEffect, useState } from "react";

export default function Table({ data: propsData }) {
  const [data, setData] = useState(propsData);
  const [total, setTotal] = useState(0);

  const onChange = (index, value) => {
    let temp = data;

    temp[index].quantity =
      !value || value < 1
        ? 1
        : value > temp[index].product.stock
        ? temp[index].product.stock
        : value;

    setData([...temp]);
  };

  const countTotal = () => {
    let value = 0;
    let tempTotal = 0;
    for (let i = 0; i < data.length; i++) {
      value = data[i].quantity * data[i].product.price;
      tempTotal += value;
    }

    setTotal(tempTotal);
  };

  useEffect(() => {
    countTotal();
  }, [data]);

  return (
    <div className="p-20 bg-gray-200">
      <h2 className="text-2xl text-center font-bold mb-10">
        SPE Frontend Shop
      </h2>
      <div className="overflow-x-scroll">
        <table className="table-auto overflow-scroll w-full bg-white">
          <thead className="text-white bg-black">
            <tr className="">
              <th className="p-4">PRODUCT</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const priceTotal = item.quantity * item.product.price;
              return (
                <tr key={index} className="border-spacing-4">
                  <td className="min-w-[600px]">
                    <div className="flex gap-4 items-center">
                      <img
                        src={item.product.media_url}
                        alt="img"
                        className="aspect-[1/1] w-[200px]"
                      />
                      <div>
                        <p className="text-md text-blue-400 mb-3">
                          {item.product.code}
                        </p>
                        <p className="text-xl font-bold mb-3">
                          {item.product.name}
                        </p>
                        <p className="text-lg mb-2">
                          IDR {item.product.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-red-500">
                          {item.product.stock} in stock
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4">
                    <input
                      className="border p-3 rounded-sm"
                      type="number"
                      value={item.quantity}
                      onChange={(e) => onChange(index, e.target.value)}
                    />
                  </td>
                  <td className="min-w-[200px] text-center">IDR {priceTotal.toLocaleString()}</td>
                </tr>
              );
            })}
            <tr className="text-white bg-black">
              <td className="p-4 text-end" colSpan={2}>
                Total
              </td>
              <td className="p-4 text-end">IDR {total.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/util";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [chartData, setChartData] = useState(null);
  const [categories, setCategories] = useState(null);

  const getCategories = async () => {
    try {
      const res = await axios.get(`${apiUrl}/categories`);
      console.log("CAT", res.data.categories);
      setCategories(res.data.categories);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch categories");
    }
  };

  const getChartData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/records/chart`);
      console.log("ST", res.data.donut, res.data.bar);
      setChartData({ donut: res.data.donut, bar: res.data.bar });
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch chart data");
    }
  };

  useEffect(() => {
    getChartData();
    getCategories();
  }, []);

  return (
    <DashboardContext.Provider
      value={{ bar: chartData?.bar, dounut: chartData?.donut, categories }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

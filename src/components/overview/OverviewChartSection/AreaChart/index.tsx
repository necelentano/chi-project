import { Box, CircularProgress } from "@mui/material";

import {
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";
import CustomCursor from "../CustomCursor";
import CustomActiveDots from "../CustomActiveDots";
import { useEffect, useState } from "react";
import chartsData from "../../../../data/charts";

const OverviewAreaChart = () => {
  const [activeDotPos, setActiveDotPos] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ResponsiveContainer width="100%" height={500}>
      {!loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <ComposedChart
          width={500}
          height={400}
          data={chartsData}
          margin={{ top: 10, right: 0, left: 35, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorToday" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: "#9FA2B4", fontSize: 10 }}
            stroke="#9FA2B4"
            tickLine={false}
          />
          <YAxis
            orientation="right"
            stroke="#9FA2B4"
            tick={{ fill: "#9FA2B4", fontSize: 10, dx: -25, dy: -15 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={() => null}
            cursor={<CustomCursor activeDotPos={activeDotPos} />}
          />
          <Line
            type="monotone"
            dataKey="yesterday"
            stroke="#DFE0EB"
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
          <Area
            type="monotone"
            dataKey="today"
            stroke="#3751FF"
            fillOpacity={1}
            fill="url(#colorToday)"
            strokeWidth={2}
            activeDot={<CustomActiveDots setActiveDotPos={setActiveDotPos} />}
            dot={false}
          />
        </ComposedChart>
      )}
    </ResponsiveContainer>
  );
};

export default OverviewAreaChart;

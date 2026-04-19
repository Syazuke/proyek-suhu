import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Grafik = React.memo(({ chartData, suhuRuangan, waktu, suhu }) => {
  return (
    <div className="w-full" style={{ minHeight: "300px" }}>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData} margin={{ left: 5, bottom: 30, right: 10 }}>
          <defs>
            <linearGradient id="colorSuhu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" />
          <XAxis
            dataKey="waktu"
            type="number"
            domain={[0, 100]}
            padding={{ bottom: 30 }}
            stroke="#9CA3AF"
            label={{
              value: "Waktu (t)",
              position: "insideBottom",
              offset: -15,
              style: { textAnchor: "middle", fontSize: "18px" },
            }}
            allowDataOverflow={true}
          />
          <YAxis
            domain={[0, 100]}
            stroke="#9CA3AF"
            label={{
              value: "Temperatur (T0)",
              angle: -90,
              position: "insideLeft",
              offset: 15,
              style: { textAnchor: "middle", fontSize: "18px" },
            }}
            allowDataOverflow={true}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#000000",
              borderColor: "#000000",
              color: "#fff",
            }}
          />
          <ReferenceLine
            y={suhuRuangan}
            stroke="#ffffff"
            strokeDasharray="3 3"
            label={{
              value: "Suhu Ruangan",
              fill: "#ffffff",
              position: "insideTopRight",
            }}
          />
          <Area
            type="monotone"
            dataKey="suhu"
            stroke="#ffffff"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
            fill="url(#colorSuhu)"
          />
          <ReferenceDot
            x={waktu}
            y={suhu}
            r={7}
            fill="#000000"
            isAnimationActive={false}
            stroke="#FFFFFF"
            strokeWidth={2}
            isFront={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
});

export default Grafik;

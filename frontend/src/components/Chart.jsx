import React from "react";
import {
    ReferenceLine,
    ScatterChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Dot,
    Scatter
} from "recharts";

const MyToolTip = () => {
    return(
        <div>
            <li></li>
        </div>
    )
}

export const PsyTestChart = (n, e) => {
    const data = [{ neuroticism: n, stability: e }];
    return (
        <ScatterChart
            width={500}
            height={400}
            data={data}
            fill="white"
            margin={{top: 40, right: 80, bottom: 20, left: 0}}
        >
            <CartesianGrid stroke="#606060" strokeDasharray="5 5"/>
            <Tooltip wrapperStyle={{color:"#808080", fill:"#808080"}} />
            <ReferenceLine x={12} stroke="#c5c5c5"
                           label={{value:"Стабильный", position:"insideTop", dy:-25}}
            />
            <ReferenceLine y={12} stroke="gray"
                           label={{value:"Экстраверт", position:"right", angle:-90, dx:10, dy:40}}
            />

            <XAxis
                domain={[0,24]}
                dataKey="neuroticism"
                type="number"
                name="Нейротизм"
                axisLine={false}
                tickCount={7}
                label={{value:"Нестабильный", position:"bottom"}}
            />

            <YAxis
                domain={[0,24]}
                dataKey="stability"
                type="number"
                name="Cтабильность"
                axisLine={false}
                tickCount={7}
                label={{value:"Интроверт", position:"center", angle:-90, dx:-10}}
            />

            <Scatter dataKey="n" fill="#21A038" shape={<Dot r={10}/>}/>
        </ScatterChart>
    );
}

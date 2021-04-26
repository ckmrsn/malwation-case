import React, { useState } from 'react'
import './cardChart.scss'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import {
	ResponsiveContainer,
	AreaChart,
	XAxis,
	Area,
	ReferenceDot,
	ReferenceLine,
} from 'recharts'
import ProgressBar from 'react-customizable-progressbar'
import { useOutsideAlert } from '../../hooks/outsideAlert'

const dataDay = [
	{ date: 'Sun', value: 1.5 },
	{ date: 'Mon', value: 1 },
	{ date: 'Tue', value: 0.5 },
	{ date: 'Wed', value: 1.7 },
	{ date: 'Thu', value: 1.1 },
	{ date: 'Fri', value: 1.9 },
	{ date: 'Sat', value: 2 },
]
const dataWeek = [
	{ date: '1/1', value: 0.3 },
	{ date: '1/2', value: 1.2 },
	{ date: '1/3', value: 0.1 },
	{ date: '1/4', value: 1.9 },
	{ date: '2/1', value: 1 },
	{ date: '2/2', value: 1.2 },
	{ date: '2/3', value: 0.5 },
]
const dataMonth = [
	{ date: 'Jan', value: 1.8 },
	{ date: 'Feb', value: 0.7 },
	{ date: 'Mar', value: 1.3 },
	{ date: 'Apr', value: 0.2 },
	{ date: 'May', value: 0.9 },
	{ date: 'Jun', value: 1.0 },
	{ date: 'Jul', value: 1.5 },
]
const dataYear = [
	{ date: '14', value: 0.1 },
	{ date: '15', value: 0.7 },
	{ date: '16', value: 0.8 },
	{ date: '17', value: 1.6 },
	{ date: '18', value: 1.9 },
	{ date: '19', value: 1.3 },
	{ date: '20', value: 0.9 },
]

const CustomReferenceDot = (props) => {
	return (
		<>
			<circle cx={props.cx} r='10' cy={props.cy} fill='white'></circle>
			<circle cx={props.cx} r='5' cy={props.cy} fill='black'></circle>
		</>
	)
}

const CardChart = () => {
	const { visible, setvisible, ref } = useOutsideAlert(false)
	const [chartDataValue, setchartDataValue] = useState('Month')
	const [activeIndex, setActiveIndex] = useState(4)
	const [data, setdata] = useState(dataMonth)
	const handleChartValue = (e) => {
		let value = e.target.dataset.value
		setchartDataValue(value)
		if (value === 'Day') {
			setdata(dataDay)
		} else if (value === 'Week') {
			setdata(dataWeek)
		} else if (value === 'Month') {
			setdata(dataMonth)
		} else if (value === 'Year') {
			setdata(dataYear)
		}
	}
	const customTick = (props) => {
		return (
			<foreignObject
				style={{
					overflow: 'visible',
					position: 'relative',
					backgroundColor: 'red',
				}}
				x={props.x}
				y={props.y}
			>
				<div
					className={
						activeIndex === props.index
							? 'customTick activeTick'
							: 'customTick'
					}
					xmlns='http://www.w3.org/1999/xhtml'
				>
					{props.payload.value}
				</div>
			</foreignObject>
		)
	}
	return (
		<div className='cardChart'>
			<div className='chartOption'>
				{visible && (
					<ul ref={ref}>
						<li> Option 1</li>
						<li> Option 2</li>
						<li> Option 3</li>
					</ul>
				)}
				<BiDotsVerticalRounded
					className='icon'
					onClick={() => setvisible(!visible)}
				/>
			</div>
			<div className='chartHeader'>
				<h4>Saved This Month</h4>
				<p> $25,999.00 </p>
			</div>
			<ul>
				<li
					data-value='Day'
					active={chartDataValue === 'Day' ? 'true' : ''}
					onClick={handleChartValue}
				>
					Day
				</li>
				<li
					data-value='Week'
					active={chartDataValue === 'Week' ? 'true' : ''}
					onClick={handleChartValue}
				>
					Week
				</li>
				<li
					data-value='Month'
					active={chartDataValue === 'Month' ? 'true' : ''}
					onClick={handleChartValue}
				>
					Month
				</li>
				<li
					data-value='Year'
					active={chartDataValue === 'Year' ? 'true' : ''}
					onClick={handleChartValue}
				>
					Year
				</li>
			</ul>
			<div className='chart'>
				<ResponsiveContainer widtg='100%' height={250}>
					<AreaChart data={data}>
						<defs>
							<linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
								<stop offset='0%' stopColor='#000' stopOpacity={0.3} />
								<stop
									offset='100%'
									stopColor='#f2f5fa'
									stopOpacity={0.3}
								/>
							</linearGradient>
						</defs>
						<Area
							type='monotone'
							dataKey='value'
							stroke='#000'
							strokeWidth={5}
							fill='url(#color)'
						/>
						<XAxis
							dataKey='date'
							onClick={(e) => {
								setActiveIndex(e.index)
								console.log(e.index)
							}}
							height={50}
							tick={customTick}
							axisLine={false}
							padding={{ right: 20, left: 20 }}
						/>

						<ReferenceDot
							x={data[activeIndex]?.date}
							y={data[activeIndex]?.value}
							label=''
							shape={CustomReferenceDot}
						/>
						<ReferenceLine
							stroke='black'
							segment={[
								{ x: data[activeIndex]?.date, y: 0 },
								{
									x: data[activeIndex]?.date,
									y: data[activeIndex]?.value - 0.17,
								},
							]}
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
			<div className='planInformation'>
				<div className='planCard'>
					<div className='shadow'>
						<div className='shadow shadow2'>
							<div className='shadow shadow3'></div>
						</div>
					</div>

					<div className='label'>
						<p>Plan for 2020</p>
						<p>Completed</p>
					</div>
					<div className='progressBar'>
						<ProgressBar
							radius={100}
							progress={65}
							strokeWidth={28}
							strokeColor='#525459'
							strokeLinecap='butt'
							trackStrokeWidth={14}
							trackStrokeLinecap='butt'
							cut={120}
							rotate={-210}
							className='progressBar'
						>
							<div className='indicator'>
								<div>{65}%</div>
							</div>
						</ProgressBar>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardChart

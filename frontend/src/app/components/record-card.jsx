export const RecordCard = ({ recordName, recordDate, recordAmount }) => {
	return (
		<div className="flex justify-between items-center bg-white p-3 w-[800px] rounded-md border border-[#E5E7EB]">
			<div className="flex">
				<div className="w-10 h-10 bg-blue-800 rounded-full"></div>
				<div className="pl-2">
					<p>{recordName}</p>
					<p className="text-sm text-gray-400">{recordDate}</p>
				</div>
			</div>
			<p className="text-[#23E01F]">{recordAmount}</p>
		</div>
	);
};

export const RecordCard = () => {
	return (
		<div className="flex justify-between items-center bg-white p-3 w-[800px] rounded-md border border-[#E5E7EB]">
			<div className="flex">
				<div className="w-10 h-10 bg-blue-800 rounded-full"></div>
				<div className="pl-2">
					<p>Lending & Renting</p>
					<p className="text-sm text-gray-400">14:00</p>
				</div>
			</div>
			<p className="text-[#23E01F]">100$</p>
		</div>
	);
};

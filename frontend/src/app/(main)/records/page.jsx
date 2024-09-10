import { SideBar, RecordCard } from "@/app/components";
import { ArrowLeft, ArrowRight } from "@/icons";

const Records = () => {
	return (
		<div className="max-w-[1200px] mx-auto py-8 flex gap-8">
			<SideBar />
			<section>
				<div className="mb-6">
					<div className="flex items-center gap-3">
						<button className="btn btn-square bg-[#E5E7EB]">
							<ArrowRight />
						</button>
						<p>Last 30 Days</p>
						<button className="btn btn-square bg-[#E5E7EB]">
							<ArrowLeft />
						</button>
					</div>
				</div>
				<div>
					<h2 className="mb-3">Today</h2>
					<div className="flex flex-col gap-4">
						<RecordCard
							recordName="Lend"
							recordDate="2024"
							recordAmount={100}
						/>
						<RecordCard
							recordName="Rent"
							recordDate="2024"
							recordAmount={100}
						/>
					</div>
				</div>
				
			</section>
		</div>
	);
};

export default Records;

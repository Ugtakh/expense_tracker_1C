export const CategoryModal = ({ categoryOpen, close }) => {
	return (
		<dialog open={categoryOpen} className="modal">
			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
				<div className="modal-box">
					<button
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						onClick={close}
					>
						✕
					</button>
					<div className="flex flex-col gap-4">
						<input
							type="text"
							placeholder="category name"
							className="w-full max-w-xs input input-bordered input-primary"
						/>
					</div>
					<div className="mt-3">
						<form method="dialog">
							<button className="btn">Add Category</button>
						</form>
					</div>
				</div>
			</div>
		</dialog>
	);
};

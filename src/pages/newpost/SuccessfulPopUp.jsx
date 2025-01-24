function successfulpopup({ postId = 'POST20241201-12345', postType = 'Wheat' }) {
//     const [open, setOpen] = useState(true)

  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="w-[331px] h-[235px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center relative">
            <div className="relative w-full h-[120px]">
              {/* Main star with checkmark */}
              <div className="relative w-[91px] h-[91px] mx-auto">
                <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-1.png" alt="Main star" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/vector-5.png" alt="Checkmark" className="w-[43px] h-[31px]" />
                </div>
              </div>

              {/* Decorative stars */}
              <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-2.png" alt="Star" className="absolute opacity-40 w-[7px] h-[7px] top-[26px] left-[168px]" />
              <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-4.png" alt="Star" className="absolute opacity-40 w-[14px] h-[14px] top-[62px] left-[218px]" />
              <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-5.png" alt="Star" className="absolute opacity-40 w-[7px] h-[7px] top-[76px] left-[92px]" />
              <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-6.png" alt="Star" className="absolute opacity-40 w-[11px] h-[11px] top-[117px] left-[95px]" />
              <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-7.png" alt="Star" className="absolute opacity-40 w-[7px] h-[7px] top-[106px] left-[202px]" />
              <img src="https://dashboard.codeparrot.ai/api/image/Z5CmEAa3lv04CQFy/star-8.png" alt="Star" className="absolute opacity-40 w-[14px] h-[14px] top-[37px] left-[78px]" />
            </div>

            <p className="font-montserrat font-semibold text-[14px] text-[#222222] text-center max-w-[258px] mt-5 leading-tight">
              Your post for
              {' '}
              {postType}
              {' '}
              with Post Reference ID:
              {postId}
              {' '}
              has been published successfully!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default successfulpopup;

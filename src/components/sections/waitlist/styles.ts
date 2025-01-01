export const modalStyles = {
	backdrop: `
      fixed inset-0 bg-[#0b1427]/80 backdrop-blur-md
      animate-in fade-in duration-300
    `,
	content: `
      relative bg-[#0b1427] rounded-xl p-8 border border-white/10 
      shadow-2xl backdrop-blur-sm
      max-w-md w-full mx-auto
    `,
	heading: "text-3xl text-[#d4a595] font-bold text-center",
	description: "text-white/70 text-center mt-4 mb-8 max-w-sm mx-auto",
	tabsList:
		"flex justify-center mb-8 space-x-4 bg-white/5 p-2 rounded-lg backdrop-blur-sm",
	input: `
      w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl 
      text-white placeholder-white/30 backdrop-blur-sm
      focus:outline-none focus:border-[#d4a595] focus:ring-1 focus:ring-[#d4a595]
      transition-all duration-200
    `,
	closeButton: `
      rounded-2xl bg-white/5 px-4 py-2 text-white/70
      transition-all duration-300 backdrop-blur-sm
      hover:bg-[#d4a595]/20 hover:text-white
      hover:scale-105 hover:shadow-lg hover:shadow-[#d4a595]/10
    `,
};

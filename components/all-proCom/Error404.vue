<template>
  <div class="relative h-auto">
    <div
      class="absolute bottom-0 left-0 w-full h-[565px]"
      style="
        background: linear-gradient(
          0deg,
          #eff1d9 0%,
          rgba(239, 241, 217, 0) 100%
        );
      "
    />
    <div class="max-w-7xl mx-auto 2xl:px-0 py-6 px-4 relative">
      <div
        class="Pricing pt-3.5 flex-col justify-start w-full items-center gap-2.5 inline-flex"
      >
        <div
          class="NavPage py-4 flex-col justify-start items-start gap-2.5 flex w-full"
        >
          <div class="justify-start items-center gap-2 inline-flex">
            <div
              class="Home text-center text-black/50 text-[11px] font-light font-['Noto Sans JP'] leading-tight"
            >
              Home
            </div>
            <div
              class="text-center text-black/50 text-[11px] font-light font-['Noto Sans JP'] leading-tight"
            >
              /
            </div>
            <div
              class="Error404 text-center text-black text-[11px] font-light font-['Noto Sans JP'] leading-tight"
            >
              Error 404
            </div>
          </div>
        </div>

        <div class="Rectangle157 relative">
          <div
            class="flex-col justify-start items-center gap-[86px] inline-flex relative"
          >
            <img
              class="w-auto xl:rounded-[157px] lg:rounded-[130px] md:rounded-[91px] sm:rounded-[50px] rounded-[37px] h-[80%] absolute top-0 z-[-1]"
              src="/img/Dino.gif"
              alt=""
            />
            <img
              class="w-full h-[170px] sm:h-auto object-cover sm:object-contain"
              src="/img/dragon.png"
              alt=""
            />
          </div>
        </div>
        <div class="pb-16 flex-col justify-center items-center gap-11 flex">
          <div class="flex-col justify-center items-center gap-3.5 flex">
            <div
              class="font-[700] text-[22px] heading leading-relaxed space-y-2 sm:text-[26px] md:text-[30px] lg:text-[52px] text-center"
            >
              Oops! Page Not Found
            </div>
            <div
              class="text-center text-black text-[18px] leading-8 lg:text-3xl font-medium lg:leading-[54px]"
            >
              The page you're looking for might have been moved or doesn’t
              exist.
            </div>
          </div>
          <div
            class="px-8 lg:px-[76px] py-4 bg-black rounded-md shadow justify-center items-center gap-2.5 inline-flex hover:shadow-[0px_4px_16px_0px_#dbf226]"
          >
            <div
              class="BackToHomePage text-center text-white text-[17px] font-bold font-['Noto Sans JP'] leading-[30.60px]"
            >
              Back to home page
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

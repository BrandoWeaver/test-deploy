<template>
  <div
    class="flex w-full md-max:flex-wrap md-max:justify-between justify-between items-center gap-[10px] rounded-lg"
  >
    <!-- Profile Pro Section -->
    <div class="flex-wrap w-full xl-max:w-full lg-max:w-full md-max:hidden">
      <ProfilePro
        :creator="props.creator!"
        @portfolio-click="handlePortfolioClick"
        @unfollow-click="handleUnfollowClick"
        :content_id="props.content_id || ''"
        :IsFollow="props.IsFollow"
      />
    </div>

    <!-- Similar Actions Section -->
    <div
      class="flex md-max:hidden items-center gap-[8px] bg-[#F2F2F2] px-4 py-2 lg-max:py-[14px] rounded-md w-[48%] xl-max:w-auto lg-max:w-auto md-max:w-[35vw] h-[62px]"
    >
      <!-- View Similar Button -->
      <button
        @click="toggleViewSimilar"
        :class="[
          'flex items-center justify-center w-[121px]  gap-[10px] px-[12px] py-[4px] md-max:px-[9px] md-max:py-[9px] rounded-[6px] border font-noto font-[350] text-[13px] leading-[23.4px] text-center transition duration-300',
          isViewSimilarSelected
            ? 'border-[#005B52] bg-[#EFF1D9] text-[#005B52]'
            : 'border-[#EEE] bg-white text-black hover:bg-[#EFF1D9]',
        ]"
        aria-label="View Similar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
        >
          <g clip-path="url(#clip0_2309_132775)">
            <path
              :fill="isViewSimilarSelected ? '#005B52' : 'black'"
              d="M13.1165 7.31555L7.0002 10.9859L0.883953 7.31555C0.75129 7.23596 0.59244 7.21232 0.442348 7.24984C0.292256 7.28736 0.163218 7.38297 0.0836199 7.51564C0.00402175 7.6483 -0.0196158 7.80715 0.0179071 7.95724C0.05543 8.10733 0.15104 8.23637 0.283703 8.31597L6.70037 12.166C6.7911 12.2205 6.89495 12.2493 7.00079 12.2493C7.10663 12.2493 7.21048 12.2205 7.3012 12.166L13.7179 8.31597C13.8505 8.23637 13.9461 8.10733 13.9837 7.95724C14.0212 7.80715 13.9976 7.6483 13.918 7.51564C13.8384 7.38297 13.7093 7.28736 13.5592 7.24984C13.4091 7.21232 13.2503 7.23596 13.1176 7.31555H13.1165Z"
            />
            <path
              :fill="isViewSimilarSelected ? '#005B52' : 'black'"
              d="M13.1165 9.98157L7.0002 13.6513L0.883951 9.98157C0.818263 9.94216 0.745455 9.91607 0.669684 9.90479C0.593914 9.89352 0.516664 9.89728 0.442346 9.91586C0.368028 9.93444 0.298098 9.96747 0.236547 10.0131C0.174996 10.0587 0.123031 10.116 0.0836181 10.1817C0.0442051 10.2473 0.0181164 10.3202 0.00684134 10.3959C-0.00443369 10.4717 -0.000674141 10.5489 0.0179053 10.6233C0.0554282 10.7734 0.151038 10.9024 0.283701 10.982L6.70037 14.832C6.7911 14.8865 6.89494 14.9153 7.00079 14.9153C7.10663 14.9153 7.21047 14.8865 7.3012 14.832L13.7179 10.982C13.8505 10.9024 13.9461 10.7734 13.9837 10.6233C14.0212 10.4732 13.9976 10.3143 13.918 10.1817C13.8384 10.049 13.7093 9.95338 13.5592 9.91586C13.4091 9.87833 13.2503 9.90197 13.1176 9.98157H13.1165Z"
            />
            <path
              :fill="isViewSimilarSelected ? '#005B52' : 'black'"
              d="M6.99981 9.53176C6.68515 9.53159 6.37646 9.44589 6.10673 9.28384L0.282732 5.78909C0.196485 5.73723 0.125122 5.66394 0.0755792 5.57634C0.0260367 5.48874 0 5.38982 0 5.28918C0 5.18854 0.0260367 5.08961 0.0755792 5.00201C0.125122 4.91441 0.196485 4.84112 0.282732 4.78926L6.10673 1.29451C6.37645 1.13248 6.68517 1.04688 6.99981 1.04688C7.31446 1.04688 7.62318 1.13248 7.8929 1.29451L13.7169 4.78926C13.8031 4.84112 13.8745 4.91441 13.9241 5.00201C13.9736 5.08961 13.9996 5.18854 13.9996 5.28918C13.9996 5.38982 13.9736 5.48874 13.9241 5.57634C13.8745 5.66394 13.8031 5.73723 13.7169 5.78909L7.8929 9.28384C7.62317 9.44589 7.31448 9.53159 6.99981 9.53176ZM1.71715 5.28918L6.70815 8.28343C6.7963 8.33616 6.8971 8.364 6.99981 8.364C7.10253 8.364 7.20333 8.33616 7.29148 8.28343L12.2825 5.28918L7.29148 2.29493C7.20333 2.2422 7.10253 2.21435 6.99981 2.21435C6.8971 2.21435 6.7963 2.2422 6.70815 2.29493L1.71715 5.28918Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_2309_132775">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(0 0.914062)"
              />
            </clipPath>
          </defs>
        </svg>
        <h1 class="flex md-max:hidden">View similar</h1>
      </button>

      <!-- Add to Collection -->
      <button
        @click.prevent="toggleCollection()"
        :class="[
          'flex px-[9px] py-[9px] gap-[10px] rounded-[6px] border transition',
          isSelected
            ? 'rounded-[4px] border-[#005B52] bg-[#EFF1D9]'
            : 'border-[#EEE] bg-white hover:bg-gradient-to-t hover:from-[#EFF1D9] hover:to-[#EFF1D9]',
        ]"
        aria-label="Add to Collection"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <g clip-path="url(#clip0_1617_97119)">
            <path
              :fill="isSelected ? '#005B52' : 'black'"
              d="M9.83333 8.87174C9.83333 9.02645 9.77187 9.17483 9.66248 9.28422C9.55308 9.39362 9.40471 9.45508 9.25 9.45508H8.08333V10.6217C8.08333 10.7765 8.02187 10.9248 7.91248 11.0342C7.80308 11.1436 7.65471 11.2051 7.5 11.2051C7.34529 11.2051 7.19692 11.1436 7.08752 11.0342C6.97812 10.9248 6.91667 10.7765 6.91667 10.6217V9.45508H5.75C5.59529 9.45508 5.44692 9.39362 5.33752 9.28422C5.22812 9.17483 5.16667 9.02645 5.16667 8.87174C5.16667 8.71704 5.22812 8.56866 5.33752 8.45927C5.44692 8.34987 5.59529 8.28841 5.75 8.28841H6.91667V7.12174C6.91667 6.96703 6.97812 6.81866 7.08752 6.70927C7.19692 6.59987 7.34529 6.53841 7.5 6.53841C7.65471 6.53841 7.80308 6.59987 7.91248 6.70927C8.02187 6.81866 8.08333 6.96703 8.08333 7.12174V8.28841H9.25C9.40471 8.28841 9.55308 8.34987 9.66248 8.45927C9.77187 8.56866 9.83333 8.71704 9.83333 8.87174ZM14.5 4.78841V10.6217C14.4991 11.395 14.1915 12.1363 13.6447 12.6831C13.0979 13.2299 12.3566 13.5375 11.5833 13.5384H3.41667C2.6434 13.5375 1.90208 13.2299 1.35529 12.6831C0.808514 12.1363 0.500926 11.395 0.5 10.6217L0.5 3.62174C0.500926 2.84848 0.808514 2.10715 1.35529 1.56037C1.90208 1.01359 2.6434 0.706004 3.41667 0.705078H4.89133C5.16282 0.705303 5.43056 0.768396 5.67358 0.889411L7.51458 1.81341C7.59593 1.85245 7.68511 1.8724 7.77533 1.87174H11.5833C12.3566 1.87267 13.0979 2.18026 13.6447 2.72704C14.1915 3.27382 14.4991 4.01515 14.5 4.78841ZM1.66667 3.62174V4.20508H13.226C13.1058 3.86505 12.8834 3.57046 12.5894 3.36163C12.2954 3.15279 11.944 3.03991 11.5833 3.03841H7.77533C7.50385 3.03819 7.2361 2.97509 6.99308 2.85408L5.15208 1.93299C5.07098 1.89295 4.98178 1.872 4.89133 1.87174H3.41667C2.95254 1.87174 2.50742 2.05612 2.17923 2.38431C1.85104 2.7125 1.66667 3.15762 1.66667 3.62174ZM13.3333 10.6217V5.37174H1.66667V10.6217C1.66667 11.0859 1.85104 11.531 2.17923 11.8592C2.50742 12.1874 2.95254 12.3717 3.41667 12.3717H11.5833C12.0475 12.3717 12.4926 12.1874 12.8208 11.8592C13.149 11.531 13.3333 11.0859 13.3333 10.6217Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_1617_97119">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(0.5 0.121094)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>

      <!-- Like Button -->
      <button
        @click="toggleLike"
        :class="[
          'flex px-[9px] py-[9px] gap-[10px] rounded-[6px] border transition',
          internalLikeStatus
            ? 'rounded-[4px] border-[#005B52] bg-[#EFF1D9]'
            : 'border-[#EEE] bg-white hover:bg-gradient-to-t hover:from-[#EFF1D9] hover:to-[#EFF1D9]',
        ]"
        aria-label="Like"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <g clip-path="url(#clip0_1617_97122)">
            <path
              :fill="internalLikeStatus ? '#005B52' : 'black'"
              d="M13.7843 4.62434C13.5107 4.30911 13.1726 4.05633 12.7929 3.88313C12.4132 3.70992 12.0007 3.62033 11.5833 3.62042H9.25642L9.45242 2.42984C9.52177 2.01057 9.4381 1.58035 9.21667 1.21763C8.99524 0.854919 8.65081 0.583885 8.2462 0.453964C7.84158 0.324043 7.40375 0.343894 7.01255 0.509896C6.62136 0.675898 6.30286 0.976989 6.11517 1.35825L4.99867 3.62042H3.41667C2.6434 3.62134 1.90208 3.92893 1.35529 4.47571C0.808514 5.02249 0.500926 5.76382 0.5 6.53709L0.5 9.45375C0.500926 10.227 0.808514 10.9683 1.35529 11.5151C1.90208 12.0619 2.6434 12.3695 3.41667 12.3704H11.175C11.877 12.3675 12.5547 12.1128 13.0847 11.6524C13.6147 11.1921 13.9619 10.5568 14.0631 9.86209L14.4743 6.94542C14.5322 6.53168 14.5006 6.11033 14.3815 5.70988C14.2625 5.30943 14.0588 4.93923 13.7843 4.62434ZM1.66667 9.45375V6.53709C1.66667 6.07296 1.85104 5.62784 2.17923 5.29965C2.50742 4.97146 2.95254 4.78709 3.41667 4.78709H4.58333V11.2038H3.41667C2.95254 11.2038 2.50742 11.0194 2.17923 10.6912C1.85104 10.363 1.66667 9.91788 1.66667 9.45375ZM13.3164 6.7815L12.9046 9.69817C12.8444 10.1147 12.6367 10.4957 12.3193 10.772C12.0019 11.0483 11.5958 11.2015 11.175 11.2038H5.75V4.63192C5.80497 4.58402 5.85048 4.52625 5.88417 4.46159L7.16108 1.8745C7.20897 1.78813 7.27667 1.71435 7.35862 1.65923C7.44056 1.60411 7.53442 1.56922 7.63248 1.55744C7.73053 1.54565 7.82998 1.5573 7.92266 1.59143C8.01534 1.62555 8.09859 1.68119 8.16558 1.75375C8.22289 1.8204 8.26479 1.89887 8.28829 1.98357C8.31178 2.06827 8.31629 2.15711 8.3015 2.24375L7.9935 4.11042C7.97998 4.19382 7.98474 4.27917 8.00745 4.36055C8.03017 4.44194 8.07029 4.51742 8.12504 4.58177C8.1798 4.64612 8.24788 4.69781 8.32458 4.73326C8.40127 4.76871 8.48476 4.78708 8.56925 4.78709H11.5833C11.8338 4.78705 12.0814 4.84079 12.3093 4.94467C12.5372 5.04855 12.7402 5.20015 12.9045 5.38922C13.0688 5.57829 13.1906 5.80044 13.2617 6.04063C13.3327 6.28082 13.3514 6.53347 13.3164 6.7815Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_1617_97122">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(0.5 0.121094)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>

      <!-- Share Button -->
      <button
        @click="handleShare"
        :class="[
          'flex px-[9px] py-[9px] gap-[10px] rounded-[6px] border transition',
          isShared
            ? 'rounded-[4px] border-[#005B52] bg-[#EFF1D9]'
            : 'border-[#EEE] bg-white hover:bg-gradient-to-t hover:from-[#EFF1D9] hover:to-[#EFF1D9]',
        ]"
        aria-label="Share"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <g clip-path="url(#clip0_1617_97125)">
            <path
              :fill="isShared ? '#005B52' : 'black'"
              d="M11.7774 8.67699C11.3364 8.67735 10.9021 8.78502 10.5119 8.99072C10.1218 9.19641 9.78751 9.49395 9.53803 9.85766L5.74111 8.14324C6.01079 7.49202 6.01184 6.76056 5.74403 6.10857L9.53569 4.38541C9.90545 4.92018 10.4546 5.30472 11.0836 5.46926C11.7126 5.63381 12.3797 5.56747 12.964 5.28228C13.5483 4.99709 14.011 4.51193 14.2682 3.91481C14.5254 3.31769 14.5601 2.64816 14.3659 2.02767C14.1718 1.40718 13.7616 0.876828 13.2099 0.532812C12.6583 0.188796 12.0015 0.0539054 11.3589 0.152607C10.7163 0.25131 10.1303 0.577067 9.70733 1.07079C9.28431 1.56451 9.05227 2.1935 9.05328 2.84365C9.05575 2.99754 9.07136 3.15093 9.09994 3.30216L5.06911 5.13382C4.68197 4.77112 4.19732 4.52939 3.67469 4.43835C3.15207 4.34731 2.61423 4.41091 2.12725 4.62134C1.64027 4.83177 1.22537 5.17987 0.933507 5.62287C0.641648 6.06586 0.485547 6.58447 0.484382 7.11497C0.483216 7.64546 0.637036 8.16475 0.926946 8.60903C1.21685 9.0533 1.63023 9.40322 2.11627 9.61579C2.60232 9.82836 3.13988 9.89432 3.6629 9.80558C4.18592 9.71683 4.67163 9.47724 5.06036 9.11624L9.10169 10.9409C9.07362 11.092 9.05821 11.2452 9.05561 11.3988C9.05549 11.9373 9.21508 12.4637 9.51418 12.9115C9.81327 13.3593 10.2385 13.7084 10.7359 13.9145C11.2334 14.1206 11.7808 14.1746 12.309 14.0695C12.8372 13.9645 13.3223 13.7052 13.7031 13.3244C14.0838 12.9437 14.3431 12.4585 14.4482 11.9304C14.5532 11.4022 14.4992 10.8548 14.2931 10.3573C14.087 9.85983 13.7379 9.43465 13.2902 9.13556C12.8424 8.83646 12.3159 8.67687 11.7774 8.67699ZM11.7774 1.2879C12.0852 1.28779 12.386 1.37893 12.6419 1.54981C12.8978 1.72069 13.0973 1.96362 13.2152 2.24789C13.333 2.53216 13.3639 2.84498 13.304 3.14681C13.244 3.44863 13.0959 3.7259 12.8783 3.94353C12.6608 4.16116 12.3836 4.30939 12.0818 4.36947C11.78 4.42955 11.4671 4.39877 11.1828 4.28104C10.8985 4.1633 10.6555 3.9639 10.4845 3.70804C10.3135 3.45219 10.2223 3.15138 10.2223 2.84365C10.2226 2.43124 10.3865 2.0358 10.6781 1.74412C10.9696 1.45244 11.365 1.28837 11.7774 1.2879ZM3.22228 8.67699C2.91455 8.6771 2.61371 8.58596 2.35779 8.41508C2.10187 8.2442 1.90237 8.00127 1.78453 7.717C1.66669 7.43274 1.6358 7.11991 1.69576 6.81808C1.75573 6.51626 1.90385 6.239 2.1214 6.02136C2.33896 5.80373 2.61616 5.6555 2.91797 5.59542C3.21977 5.53535 3.53261 5.56612 3.81692 5.68386C4.10123 5.80159 4.34424 6.00099 4.51521 6.25685C4.68618 6.5127 4.77744 6.81352 4.77744 7.12124C4.77698 7.53361 4.613 7.92896 4.32147 8.2206C4.02994 8.51225 3.63464 8.67637 3.22228 8.67699ZM11.7774 12.9546C11.4697 12.9546 11.169 12.8633 10.9131 12.6924C10.6573 12.5214 10.4579 12.2785 10.3401 11.9942C10.2224 11.7099 10.1916 11.3971 10.2516 11.0953C10.3116 10.7935 10.4598 10.5163 10.6774 10.2987C10.8949 10.0812 11.1721 9.93299 11.4739 9.87297C11.7757 9.81294 12.0885 9.84375 12.3728 9.9615C12.6571 10.0792 12.9001 10.2787 13.071 10.5345C13.2419 10.7903 13.3332 11.0911 13.3332 11.3988C13.3329 11.8113 13.1689 12.2069 12.8772 12.4986C12.5855 12.7903 12.19 12.9543 11.7774 12.9546Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_1617_97125">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(0.5 0.121094)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>

      <!-- Report Button -->
      <button
        @click="toggleReport"
        :class="[
          'flex px-[9px] py-[9px] gap-[10px] rounded-[6px] border transition',
          isReported
            ? 'rounded-[4px] border-[#005B52] bg-[#EFF1D9]'
            : 'border-[#EEE] bg-white hover:bg-gradient-to-t hover:from-[#EFF1D9] hover:to-[#EFF1D9]',
        ]"
        aria-label="Report"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <g clip-path="url(#clip0_1617_97128)">
            <path
              :fill="isReported ? '#005B52' : 'black'"
              d="M7.50033 8.87152C7.34562 8.87152 7.19725 8.81006 7.08785 8.70066C6.97845 8.59127 6.91699 8.44289 6.91699 8.28818V3.62152C6.91699 3.46681 6.97845 3.31843 7.08785 3.20904C7.19725 3.09964 7.34562 3.03818 7.50033 3.03818C7.65504 3.03818 7.80341 3.09964 7.91281 3.20904C8.0222 3.31843 8.08366 3.46681 8.08366 3.62152V8.28818C8.08366 8.44289 8.0222 8.59127 7.91281 8.70066C7.80341 8.81006 7.65504 8.87152 7.50033 8.87152ZM7.96291 13.9815C9.22291 13.4752 13.3337 11.4843 13.3337 7.1466V4.13018C13.3343 3.51711 13.1415 2.91946 12.7826 2.42237C12.4238 1.92528 11.9173 1.55409 11.3352 1.36168L7.68408 0.151267C7.56488 0.111036 7.43577 0.111036 7.31658 0.151267L3.66549 1.36168C3.08339 1.55409 2.57685 1.92528 2.21801 2.42237C1.85917 2.91946 1.66635 3.51711 1.66699 4.13018V7.1466C1.66699 10.9744 5.75324 13.3159 7.00624 13.9424C7.16472 14.0181 7.3302 14.078 7.50033 14.1215C7.6585 14.0892 7.81335 14.0423 7.96291 13.9815ZM10.9677 2.46885C11.3168 2.58459 11.6206 2.8074 11.8359 3.10564C12.0512 3.40387 12.167 3.76236 12.167 4.13018V7.1466C12.167 10.7534 8.61624 12.4614 7.52774 12.8989C6.42641 12.3482 2.83366 10.3059 2.83366 7.1466V4.13018C2.83361 3.76236 2.94946 3.40387 3.16476 3.10564C3.38006 2.8074 3.68385 2.58459 4.03299 2.46885L7.50033 1.31968L10.9677 2.46885ZM7.50033 10.0382C7.38495 10.0382 7.27217 10.0724 7.17624 10.1365C7.08032 10.2006 7.00555 10.2917 6.9614 10.3983C6.91725 10.5049 6.90569 10.6222 6.9282 10.7353C6.95071 10.8485 7.00627 10.9524 7.08785 11.034C7.16943 11.1156 7.27337 11.1711 7.38652 11.1936C7.49968 11.2162 7.61697 11.2046 7.72356 11.1604C7.83015 11.1163 7.92125 11.0415 7.98535 10.9456C8.04945 10.8497 8.08366 10.7369 8.08366 10.6215C8.08366 10.4668 8.0222 10.3184 7.91281 10.209C7.80341 10.0996 7.65504 10.0382 7.50033 10.0382Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_1617_97128">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(0.5 0.121094)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
    <CusDialog v-model:open="isShareDialogOpen">
      <div
        class="text-lg flex justify-center font-medium leading-6 text-gray-900"
      >
        Share this content
      </div>
      <div class="mt-5">
        <div class="flex items-center justify-between gap-5">
          <button
            v-for="(item, index) in shareContent"
            :key="index"
            @click.prevent="handleAction(item)"
            class="flex flex-col items-center justify-center gap-1 group"
          >
            <div
              class="w-12 h-12 rounded-full flex items-center justify-center bg-[#F5F5F5] hover:scale-105 transition"
            >
              <Icon :icon="item.icon" width="24" height="24" />
            </div>
            <span class="text-xs text-black group-hover:underline">
              {{ item.title }}
            </span>
          </button>
        </div>
      </div>

      <div class="mt-4 flex justify-end">
        <button
          type="button"
          class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          @click="isShareDialogOpen = false"
        >
          Close
        </button>
      </div>
    </CusDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProfilePro from '@/components/product_page/ProfilePro.vue'
import SimilarActions from '@/components/product_page/SimilarActions.vue'
import { API } from '~/constants/apiEndpoints'
import { useApi } from '~/composables/custom-fetch-api/useApi'
import { useLikeStatus } from '~/composables/detail/useLike'
import { useCollection } from '~/composables/detail/useCollection'
import CusDialog from '../cusComponents/CusDialog.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
const props = defineProps<{
  creator?: POST.CREATOR
  content_id?: string
  IsFollow?: boolean
  IsLike?: boolean
}>()
const isViewSimilarSelected = ref(false)
const isShared = ref(false)
const isReported = ref(false)
const {
  addToCollection,
  removeFromCollection,
  saveCollectionToStorage,
  removeCollectionFromStorage,
  isCollected,
} = useCollection(`${props.content_id}`)
const { like, unlike, isLiked, saveLikeToStorage, removeLikeFromStorage } =
  useLikeStatus({ slug_detail_id: `${props.content_id}` })
function toggleViewSimilar(): void {
  isViewSimilarSelected.value = !isViewSimilarSelected.value
}
const isSelected = ref()
const toggleCollection = async () => {
  isSelected.value = !isSelected.value
  if (!auth.authenticated) {
    router.push('/auth/login')
    return
  }
  if (isSelected.value) {
    saveCollectionToStorage(`${props.content_id}`)
    await addToCollection()
  } else {
    removeCollectionFromStorage(`${props.content_id}`)
    await removeFromCollection()
  }
}
const internalLikeStatus = ref(props.IsLike)
onMounted(() => {
  if (props.content_id) {
    internalLikeStatus.value = isLiked(`${props.content_id}`)
  }
  if (props.content_id) {
    isSelected.value = isCollected(`${props.content_id}`)
  }
})
// const toggleLike = async () => {
//   const id = props.creator?.id
//   if (!id) return

//   if (!internalLikeStatus.value) {
//     internalLikeStatus.value = true
//     saveLikeToStorage(`${props.content_id}`)
//     await like()
//   } else {
//     internalLikeStatus.value = false
//     removeLikeFromStorage(`${props.content_id}`)
//     await unlike()
//   }
// }
const router = useRouter()
const auth = useAuthStore()
const toggleLike = async () => {
  const id = props.creator?.id
  if (!id) return
  if (!auth.authenticated) {
    router.push('/auth/login')
    return
  }
  if (!internalLikeStatus.value) {
    internalLikeStatus.value = true
    saveLikeToStorage(`${props.content_id}`)
    await like()
  } else {
    internalLikeStatus.value = false
    removeLikeFromStorage(`${props.content_id}`)
    await unlike()
  }
}

function toggleReport(): void {
  if (!auth.authenticated) {
    router.push('/auth/login')
    return
  }
  isReported.value = !isReported.value
}

function handlePortfolioClick(): void {
  console.log('Portfolio button clicked')
}

function handleUnfollowClick(): void {
  console.log('Unfollow button clicked')
}

const isShareDialogOpen = ref(false)

const shareUrl = useRequestURL().href
const shareText = 'Check this out!'
const pageTitle = 'Awesome Page'
const shareContent = [
  {
    icon: 'logos:facebook',
    title: 'Facebook',
    action: () =>
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
        '_blank'
      ),
  },
  {
    icon: 'devicon:twitter',
    title: 'X',
    action: () =>
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText || document.title)}`,
        '_blank'
      ),
  },
  {
    icon: 'logos:whatsapp-icon',
    title: 'WhatsApp',
    action: () =>
      window.open(
        `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}%20${encodeURIComponent(shareUrl)}`,
        '_blank'
      ),
  },
  {
    icon: 'lets-icons:copy-light',
    title: 'Copy Link',
    action: async () => {
      try {
        await navigator.clipboard.writeText(shareUrl)
        alert('✅ Link copied to clipboard!')
      } catch (err) {
        console.error('❌ Failed to copy: ', err)
      }
    },
  },
]

const handleAction = (item: (typeof shareContent)[0]) => {
  item.action()
}
const isMobile = (): boolean => {
  if (typeof navigator === 'undefined') return false
  return /Mobi|Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
}
const handleShare = () => {
  console.log('Share button clicked', navigator.share)

  if (isMobile() && navigator.share) {
    navigator
      .share({
        title: pageTitle,
        text: shareText,
        url: shareUrl,
      })
      .catch((error) => console.error('❌ Error sharing:', error))
  } else {
    isShareDialogOpen.value = true
  }
}

const copyShareLink = async () => {
  try {
    await navigator.clipboard.writeText(shareUrl)
    alert('Link copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
</style>

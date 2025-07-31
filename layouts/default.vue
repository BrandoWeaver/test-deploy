<template>
  <ClientOnly>
    <LazyNetworkBanner />
  </ClientOnly>
  <div class="flex flex-col h-screen w-full min-w-[82%]">
    <AppHeader />

    <div class="flex flex-col items-start h-auto w-full">
      <slot />
    </div>

    <ClientOnly>
      <LazyAppFooter />
    </ClientOnly>
  </div>
</template>

<template>
    <div class="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <img :src="image" alt="Category Image" class="w-full" />
        <div class="p-4">
            <h3 class="font-bold">{{ title }}</h3>
            <p class="text-sm text-gray-600">{{ subtitle }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        title: String,
        subtitle: String,
    },
};
</script>
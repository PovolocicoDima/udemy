<template>
    <div class="root">
        <UserCard />
    </div>
</template>

<script>
import UserCard from './components/userCard.vue';

export default {
    name: 'App',
    components: {
        UserCard
    },
    data: () => ({
        count: 0
    }),
    methods: {
        plus() {
            if (this.count >= 0 && this.count < 10) {
                this.count += 1
            }
        },
        minus() {
            if (this.count > 0 && this.count <= 10) {
                this.count -= 1
            }
        }
    }
}
</script>

<style scoped>
.root {
    display: flex;
    padding: 100px;
}
</style>
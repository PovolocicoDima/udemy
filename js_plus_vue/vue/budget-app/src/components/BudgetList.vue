<template>
    <div class="budget-list-wrap">
        <el-card :header="header">
            <template v-if="!isEmpty">
                <div v-for="(item, prop) in list" :key="prop">
                    <budget-list-item @deleteItem="onDeleteItem" :item="item" />
                </div>
            </template>
            <el-alert v-else type="info" :title="emptyList" closable="false" />
        </el-card>
    </div>
</template>

<script>
import BudgetListItem from './BudgetListItem.vue';

export default {
    name: 'BudgetList',
    components: { BudgetListItem },
    props: {
        list: {
            type: Object,
            default: () => ({}),
        }
    },
    data: () => ({
        header: 'Budget List',
        emptyList: 'Empty List',
    }),
    computed: {
        isEmpty() {
            return !Object.keys(this.list).length
        }
    },
    methods: {
        deleteItem(id) {
            this.$emit('deleteItem', id);
        }
    }
}
</script>

<style scoped>
.budget-list-wrap {
    max-width: 500px;
    margin: auto;
}
</style>

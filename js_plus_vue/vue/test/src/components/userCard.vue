<template>
    <div class="user-card">
        <h1>I'll find you</h1>
        <input type="text" @input="searchText = $event.target.value">
        <p>All names: {{allNames}}, found: {{setUsersFound}}</p>
        <p>Names</p>
        <ul>
            <li v-for="user in filtredNames" :key="user.name">{{user.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'userCard',
    data: () => ({
        users: [
            {name: 'Dasha'},
            {name: 'Dima'},
            {name: 'Sasha'},
            {name: 'Catea'},
            {name: 'Olea'},
            {name: 'Ola'},
        ],
        searchText: '',
    }),
    computed: {
        allNames() {
            return this.users.length;
        },
        filtredNames() {            
            return this.users.filter(({name}) => {
                return name.toLowerCase().includes(this.searchText.toLowerCase())
            })
        },
        setUsersFound() {
            return this.filtredNames.length;
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
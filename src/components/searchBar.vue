<template>
    <div class="searchBar">
        <svg viewBox='0 0 56.966 56.966' fill='#717790c7'>
            <path d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/>
        </svg>
        <input type="text" placeholder="Search">
    </div>
</template>
<script>

export default ({
    name:'searchBar'
})
</script>

<style scoped>
.searchBar{
    width: 30%;
    height: 80%;
    border-radius: 1vw;
    margin-left: 4vw;
    transition: .2s linear;
    background-color: #14162b70;
    display: flex;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 10%);
}
svg{
    width:9%;
    margin: 0 20px;
}
input{
    width: 70%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0%);
    outline: none;
    border: 0;
    font-size: 30px;
    color: #f9fafb; 
}
::placeholder{
    color: #2c3e50;
}
@media screen and (max-width:600px) {
    .searchBar{
        width: 90%;
    }
}
</style>
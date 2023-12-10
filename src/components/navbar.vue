<template>
    <div>
        <div class="navbar">
            <nav>
                <ul>
                    <li class="bolder"><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/socialmedia">Social Media</router-link></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    border: 1px solid black;
    height: 50px;
}

nav,
ul,
li {
    margin-top: 8px;
    font-family: 'Poppins', sans-serif;
    color: white;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    z-index: 2;
}

a {
    color: white;
}
</style>

<script>
export default {
    name: 'app'
}
</script>
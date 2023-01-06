<template>
    <header>
        <nav class="container">
            <a href="/">
                <img alt="Cashforce" id="logo" src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg">
            </a>

            <img src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" 
            alt="abrir menu" id="menu-lines" v-on:click="openMenu">

            <div id="menu-overlay" v-if="menuState" v-on:click="closeMenu"></div>

            <div id="menu-itens" :class="{active:menuState}">
                <img alt="Cashforce" id="menu-logo" src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg">

                <ul>
                    <li>Institucional</li>
                    <li>Sou fornecedor</li>
                    <li>Blog</li>
                    <li>Login</li>

                </ul>
            </div>

        </nav>
    </header>
</template>

<script>
export default{
    name: 'Header_main',

    data(){
        return{
            menuState: false
        }
    },
    methods:{
        openMenu: function(){
            this.menuState = true;
        },
        closeMenu: function(){
            this.menuState = false;
        }
    }
}
</script>

<style scoped>

    header{
        background-color: var(--color-background-nav);
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav{
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }

    /* #logo{
        position: relative;
        left: -40%;
        top: 14px;
    } */

    #menu-lines{
        width: 30px;
    }

    #menu-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 40%;
        height: 100vh;
        background-color: black;
        opacity: 0.8;
    }

    #menu-logo{
        width: 110px;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    #menu-itens{
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 100vh;
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    #menu-itens.active{
        display: flex;
    }

    ul{
        list-style: none;
        text-align: center;
    }

    ul li{
        color: var(--color-text-light);
        margin: 20px 0px;
        font-weight: bold;
    }

    @media (min-width: 700px){
        #menu-lines,
        #menu-logo,
        #menu-overlay{
            display: none;
        }

        #menu-itens{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul{
            display: flex;
            height: 60px;
            align-items: center;
        }

        ul li{
            margin: 0;
            margin-left: 20px;
        }
    }

</style>
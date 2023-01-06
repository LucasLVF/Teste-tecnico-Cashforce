<template>
    <footer>
        <div id="footer-itens">
            <ul>
                <li>contato@cashforce.com.br</li>
                <li>(11) 94173-9568</li>
                <li>Política de privacidade</li>
                <li>Login</li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer-main'
}
</script>

<style scoped>
footer {
    width: 100%;
    height: 60px;
    background-color: var(--color-background-nav);
    display: flex;
    justify-content: center;
    align-items: center;
}

#footer-itens {
    display: flex;
    position: static;
    height: 60px;
    width: auto;
    flex-direction: row
}

ul {
    list-style: none;
    display: flex;
    height: 60px;
    align-items: center;
}

ul li {
    margin: 0;
    margin-left: 20px;
    color: var(--color-text-light);
    font-weight: bold;
}
</style>
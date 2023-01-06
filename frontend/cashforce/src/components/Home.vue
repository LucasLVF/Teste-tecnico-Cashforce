<template>
    <main>
        <div v-for="(info, index) in information" :key="index" id="card">
            {{ this.orderSatus(info.orderStatusBuyer) }}
            <ul>
                <li>Numero do Pedido: {{ info.orderNumber }}</li>
                <li>NFID do Pedido: {{ info.orderNfId }}</li>
                <li>Status do Pedido: {{ dataStatus }}</li>
                <li>Data de Emissão do Pedido: {{ info.emissionDate }}</li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Home-main',

    data() {
        return {
            information: [],
            dataStatus: "",
        }
    },
    methods: {
        orderSatus: function (orderStatus) {
            if (orderStatus == 0) {
                this.dataStatus = "Pendente de confirmação"
            }
            else if (orderStatus == 1) {
                this.dataStatus = "Pedido confirmado"
            }
            else if (orderStatus == 2) {
                this.dataStatus = "Não reconhece o pedido"
            }
            else if (orderStatus == 3) {
                this.dataStatus = "Mercadoria não recebida"
            }
            else if (orderStatus == 4) {
                this.dataStatus = "Recebida com avaria"
            }
            else if (orderStatus == 5) {
                this.dataStatus = "Devolvida"
            }
            else if (orderStatus == 6) {
                this.dataStatus = "Recebida com devolução parcial"
            }
            else if (orderStatus == 7) {
                this.dataStatus = "Recebida e confirmada"

            } else if (orderStatus == 8) {
                this.dataStatus = "Pagamento Autorizado"
            }
            else {
                this.dataStatus = "deu ruim"
            }
        }
    },
    mounted() {
        this.$axios.get('http://localhost:3001/')
            .then((response) => (this.information = response.data))
    },
}
</script>

<style scoped>
main {
    background-color: var(--color-background-home);
    align-items: center;
    flex-direction: column;
}

ul {
    list-style: none;
    display: flex;
    height: flex;
    align-items: center;
    flex-direction: column;
    background-color: #00AD8C;
    margin: 25px;
    border-style: solid;
    border-width: 5px;
    border-radius: 10px;
}

ul li {
    margin: 2px;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    color: var(--color-text-light);
    font-weight: bold;
    font-size: 20px;
}

#card {
    flex-direction: wrap;
}
</style>
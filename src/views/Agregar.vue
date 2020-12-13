<template>
    <div class="container">
        <h2 class="center">Agregando Juguetes</h2>
        <b-form @submit.prevent="agregando">
            <b-form-group id="input-group-1" label="Código:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.codigo" type="text" required placeholder="Ingresar Código"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
                <b-form-input id="input-1" v-model="form.nombre" type="text" required placeholder="Ingresar Nombre"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Stock:" label-for="input-2">
                <b-form-input id="input-2" v-model="form.stock" type="number" required placeholder="Ingresar Stock"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Precio:" label-for="input-3">
                <b-form-input id="input-3" v-model="form.precio" type="number" required placeholder="Ingresar Precio"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Agregar</b-button>
            <b-button type="reset" variant="danger" class="mx-3">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        name: 'Agregar',
        data() {
            return {
                form: {
                    codigo: '',
                    nombre: '',
                    stock: '',
                    precio: '',
                }
            }
        },
        methods: {
            agregando(){

                if (this.form.codigo && this.form.nombre && this.form.nombre.length > 2 && this.form.stock && this.form.stock > 0 && this.form.precio && this.form.precio > 0) {

                        this.$confirm('Desea agregar un Juguete?', 'Informativo', {
                            confirmButtonText: 'OK',
                            cancelButtonText: 'Cancelar',
                            type: 'info',
                            center: true
                            }).then(() => {
                            this.$message({
                                type: 'success',
                                message: 'Se envió a crear el juguete'
                            });
                            this.$store.dispatch('agregandoJuguetes',this.form);
                            this.$router.push('/juguetes');
                            }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: 'Se canceló acción de agregar Juguete'
                            });          
                        });               
                } else {
                    console.log("No se puede");
                }
            }
        },
    }
</script>

<style>

</style>
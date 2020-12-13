<template>
  <div class="container">
      <h1 class="my-5">Listado de Jueguetes</h1>
        <el-table
          :data="dataJuguetes"
          style="width: 100%">
            <el-table-column
              label="Cód"
              width="200">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.codigo }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="Nombre"
              width="250">
              <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.nombre }}</el-tag>
                  </div>
              </template>
            </el-table-column>
            <el-table-column
              label="Stock"
              width="250">
              <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.stock }}</el-tag>
                  </div>
              </template>
            </el-table-column>
            <el-table-column
              label="Precio"
              width="250">
              <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.precio }}</el-tag>
                  </div>
              </template>
            </el-table-column>
            <el-table-column
              label="Operaciones">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.row.id)"><i class="el-icon-edit"></i></el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row.id)"><i class="el-icon-error"></i></el-button>
              </template>
            </el-table-column>
        </el-table>


  </div>
</template>

<script>
export default {
    name: 'Usuarios',
    data() {
      return {
       
      }
    },
    computed: {
      dataJuguetes(){
        return this.$store.getters.mostrarJuguetes;
      }
    },
    methods: {
      handleDelete(id){
        this.$confirm('Se eliminará el registro permanentemente, desea continuar?', 'Advertencia', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancelar',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Se envió a borrar'
          });
          this.$store.dispatch('eliminarJuguetes',id);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Eliminación Cancelada'
          });          
        });
      },
      handleEdit(id){
        this.$router.push({name: 'Editar', params:{id:id}});
      }
    },
}
</script>

<style>

</style>
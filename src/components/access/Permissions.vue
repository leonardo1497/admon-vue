<template>
    <div class="pa-10">
        <div class="text-center pt-3 pb-3">
            <h2 class="headline">
              Gestión de acceso
            </h2>
          </div>
        <Add/>
        <Table class="mt-5" />
    </div>
</template>
<script>
import Add from './permissions/Add'
import Table from './permissions/Table'
export default {
    components: {
        Add,
        Table
    }
}
</script>
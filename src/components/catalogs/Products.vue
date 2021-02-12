<template>
    <div class="pa-10">
        <div class="text-center pt-3 pb-3">
            <h2 class="headline">
              Gestión de productos
            </h2>
          </div>
        <Add/>
        <Table class="mt-5" />
    </div>
</template>
<script>
import Add from './products/Add'
import Table from './products/Table'
export default {
    components: {
        Add,
        Table
    }
}
</script>
<template>
    <div :style=" `left: ${style.left}; top: ${style.top}; right: ${style.right}; bottom: ${style.bottom};
    background: ${style.bg_color}; opacity: ${style.opacity}  ` " class=" fixed-right w-40 h-40 border rounded-full -z-10 ">
    </div>
</template>
<script>
export default {
    name: "circles",
    props: ["style"],
    setup(){
        return {

        }
    }
}
</script>
<style >
    
</style>
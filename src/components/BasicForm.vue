<template>
    <div class="field">
        <label class="label is-left">{{label}}</label>
        <input class="input" 
            :placeholder="label" 
            :value="modelValue" 
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<script >

export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: String,
            default: ''
        }
    }
}
</script>
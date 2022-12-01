<template>
    <el-card class="form-card">
        <el-form 
            :model="formData" 
            :rules="rules" 
            label-position="top"
            ref="addItemForm"
        >
            <el-form-item label="Type" prop="type">
                <el-select
                    class="type-select" 
                    v-model="formData.type"
                    placeholder="Choose type"
                >
                    <el-option label="Income" value="INCOME" />
                    <el-option label="Outcome" value="OUTCOME" />
                </el-select>
            </el-form-item>
            <el-form-item label="Comments" prop="comment">
                <el-input v-model="formData.comment" />
            </el-form-item>
            <el-form-item label="Value" prop="value">
                <el-input v-model.number="formData.value" type="number"/>
            </el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form>
    </el-card>
</template>

<script>
export default {
    name: 'Form',
    data: () => ({
        formData: {
            type: 'INCOME',
            comment: '',
            value: 0,
        },
        rules: {
            type:    [
                { required: true, message: 'Please select type', trigger: 'blur' }
            ],
            comment: [
                { required: true, message: 'Please input comment', trigger: 'blur' }
            ],
            value:   [
                { required: true, message: 'Please input value', trigger: 'blur' },
                { type: 'number', message: 'Value must be a number', trigger: 'change' }
            ]
        }
    }),
    methods: {
        onSubmit() {
            this.$refs.addItemForm.validate((valid) => {
                if (valid) {
                    this.$emit('submitForm', { ...this.formData })
                    this.$refs.resetFields();
                }
            })
        }
    }
}
</script>

<style scoped>
.form-card {
    max-width: 500px;
    margin: auto;
}
.type-select {
    width: 100%;
}
</style>
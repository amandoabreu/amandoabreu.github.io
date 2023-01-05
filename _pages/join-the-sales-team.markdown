---
layout: default
title: contact
listed: yes
---
<script src="https://unpkg.com/vue@next"></script>
    <!-- Flow Form -->
    <script src="https://unpkg.com/@ditdot-dev/vue-flow-form@2.3.1"></script>
    <!-- Flow Form base CSS -->
    <link rel="stylesheet" href="https://unpkg.com/@ditdot-dev/vue-flow-form@2.3.1/dist/vue-flow-form.min.css">
    <!-- Optional theme.css -->
    <link rel="stylesheet" href="https://unpkg.com/@ditdot-dev/vue-flow-form@2.3.1/dist/vue-flow-form.theme-minimal.min.css">
    <!-- Optional font -->
    <script>
    var app = Vue.createApp({
        el: '#app',
        template: '<flow-form v-bind:questions="questions" v-bind:language="language" />',
        data: function() {
            return {
            language: new VueFlowForm.LanguageModel({
                // Your language definitions here (optional).
                // You can leave out this prop if you want to use the default definitions.
            }),
            questions: [
                new VueFlowForm.QuestionModel({
                title: 'Question',
                type: VueFlowForm.QuestionType.MultipleChoice,
                options: [
                    new VueFlowForm.ChoiceOption({
                    label: 'Answer'
                    })
                ]
                })
            ]
            }
        }
        }).component('FlowForm', VueFlowForm.FlowForm);
        const vm = app.mount('#app');
    </script>
<div class="centerwrapper centerwrapper--medium" style="margin-top:100px">
    <div id="app"></div>
</div>


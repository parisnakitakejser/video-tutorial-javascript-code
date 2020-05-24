<template>
    <b-container>

        <b-button v-b-toggle.collapse-1 variant="primary" class="mb-2">Toggle Collapse</b-button>
        <b-collapse id="collapse-1">
            <b-card>
                <p class="card-text">
                    First collapse content
                </p>
            </b-card>
        </b-collapse>

        <hr />

        <b-button v-b-toggle.collapse-2 variant="primary" class="mb-2">Toggle Collapse</b-button>
        <b-collapse id="collapse-2">
            <b-card>
                <p class="card-text">
                    Number 2 collapse content
                </p>

                <b-button v-b-toggle.collapse-3 variant="primary" class="mb-2">Toggle Collapse</b-button>
                <b-collapse id="collapse-3">
                    <b-card>
                        <p class="card-text">
                            Number 3 collapse content
                        </p>
                    </b-card>
                </b-collapse>

            </b-card>
        </b-collapse>

        <hr />

        <b-button v-b-toggle.collapse-group variant="primary" class="mb-2">Toggle Collapse Group</b-button>

        <b-collapse id="collapse-group">
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1">
                    <b-button block v-b-toggle.tab-1 variant="info">Tab 1</b-button>
                </b-card-header>
                <b-collapse id="tab-1" accordion="my-group" visible>
                    <b-card-body>Tab text 1</b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1">
                    <b-button block v-b-toggle.tab-2 variant="info">Tab 2</b-button>
                </b-card-header>
                <b-collapse id="tab-2" accordion="my-group">
                    <b-card-body>Tab text 2</b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1">
                    <b-button block v-b-toggle.tab-3 variant="info">Tab 3</b-button>
                </b-card-header>
                <b-collapse id="tab-3" accordion="my-group">
                    <b-card-body>Tab text 3</b-card-body>
                </b-collapse>
            </b-card>
        </b-collapse>
    </b-container>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
    }
  },

  methods: {
  }
}
</script>

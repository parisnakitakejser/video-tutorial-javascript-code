<template>
    <b-container>

       <b-card title="Card title" sub-title="Card subtitle">
           <b-card-text>
               Hello world, this is a card text sample.
           </b-card-text>

           <b-card-text>
               This is a secound card text element.
           </b-card-text>

           <b-link href="#" class="card-link">
               Link here!
           </b-link>
       </b-card>

        <hr />

        <b-row>
            <b-col>
                <b-card title="Card title" sub-title="Card subtitle">
                    <b-card-text>
                        Hello world, this is a card text sample.
                    </b-card-text>

                    <b-card-text>
                        This is a secound card text element.
                    </b-card-text>

                    <b-link href="#" class="card-link">
                        Link here!
                    </b-link>
                </b-card>
            </b-col>
            <b-col>
                <b-card title="Card title" sub-title="Card subtitle">
                    <b-card-text>
                        Hello world, this is a card text sample.
                    </b-card-text>

                    <b-card-text>
                        This is a secound card text element.
                    </b-card-text>

                    <b-link href="#" class="card-link">
                        Link here!
                    </b-link>
                </b-card>
            </b-col>
            <b-col>
                <b-card title="Card title" sub-title="Card subtitle">
                    <b-card-text>
                        Hello world, this is a card text sample.
                    </b-card-text>

                    <b-card-text>
                        This is a secound card text element.
                    </b-card-text>

                    <b-link href="#" class="card-link">
                        Link here!
                    </b-link>
                </b-card>
            </b-col>
        </b-row>

        <hr />

        <b-row>
            <b-col>
                <b-card title="Card title" sub-title="Card subtitle" img-src="https://placekitten.com/600/300" img-top>
                    <b-card-text>
                        Hello world, this is a card text sample.
                    </b-card-text>

                    <b-card-text>
                        This is a secound card text element.
                    </b-card-text>

                    <b-link href="#" class="card-link">
                        Link here!
                    </b-link>
                </b-card>
            </b-col>
            <b-col>
                <b-card title="Card title" sub-title="Card subtitle" img-src="https://placekitten.com/600/300" img-bottom>
                    <b-card-text>
                        Hello world, this is a card text sample.
                    </b-card-text>

                    <b-card-text>
                        This is a secound card text element.
                    </b-card-text>

                    <b-link href="#" class="card-link">
                        Link here!
                    </b-link>
                </b-card>
            </b-col>
            <b-col>
                <b-card title="Card title" sub-title="Card subtitle" img-src="https://placekitten.com/600/740" overlay>
                    <b-card-text>
                        Hello world, this is a card text sample.
                    </b-card-text>

                    <b-card-text>
                        This is a secound card text element.
                    </b-card-text>

                    <b-link href="#" class="card-link">
                        Link here!
                    </b-link>
                </b-card>
            </b-col>
        </b-row>

        <hr />

        <b-card title="Card title" sub-title="Card subtitle" img-src="https://placekitten.com/600/300" img-left>
            <b-card-text>
                Hello world, this is a card text sample.
            </b-card-text>

            <b-card-text>
                This is a secound card text element.
            </b-card-text>

            <b-link href="#" class="card-link">
                Link here!
            </b-link>
        </b-card>

        <hr />

        <b-card title="Card title" sub-title="Card subtitle" img-src="https://placekitten.com/600/300" img-right>
            <b-card-text>
                Hello world, this is a card text sample.
            </b-card-text>

            <b-card-text>
                This is a secound card text element.
            </b-card-text>

            <b-link href="#" class="card-link">
                Link here!
            </b-link>
        </b-card>

        <hr />

        <b-card-group deck>
            <b-card bg-variant="primary" text-variant="white" header="Primary">
                <b-card-text>Hello world! block 1</b-card-text>
            </b-card>

            <b-card border-variant="secondary" header="Secondary">
                <b-card-text>Hello world! block 2</b-card-text>
            </b-card>

            <b-card border-variant="success" header-text-variant="white" header-bg-variant="success" header="Success">
                <b-card-text>Hello world! block 3</b-card-text>
            </b-card>
        </b-card-group>

        <hr />

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

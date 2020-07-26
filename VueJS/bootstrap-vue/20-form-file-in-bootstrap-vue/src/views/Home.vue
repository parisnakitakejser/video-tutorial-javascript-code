<template>
    <b-container>

        <b-form-file
                v-model="file_1"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
        ></b-form-file>

        <div class="mt-3">
            Selected file: {{file_1 ? file_1.name : ''}}
        </div>

        <hr />

        <b-form-file
                plain
                v-model="file_2"
                placeholder="Choose a file here..."
        ></b-form-file>

        <div class="mt-3">
            Selected file: {{file_2 ? file_2.name : ''}}
        </div>

        <hr />

        <b-form-file
                multiple
                v-model="file_3"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
        ></b-form-file>

        <div class="mt-3">
            Selected files:<br />
            <span v-for="(val, inx) in file_3">{{val.name}}<br /></span>
        </div>

        <hr />

        <strong>Limiting to certain file types</strong>
        <p>
            You can limit the file types by setting the accept prop to a string containing
            the allowed file type(s). To specify more than one type, separate the values
            with a comma.
        </p>

        <b-form-file class="mb-2"
                placeholder="Choose a image file or drop it here..."
                drop-placeholder="Drop file here..."
                 accept="image/*"
        ></b-form-file>

        <b-form-file class="mb-2"
                placeholder="Choose a jpeg file or drop it here..."
                drop-placeholder="Drop file here..."
                 accept="image/jpeg"
        ></b-form-file>

        <b-form-file class="mb-2"
                placeholder="Choose a vue file or drop it here..."
                drop-placeholder="Drop file here..."
                 accept=".vue"
        ></b-form-file>

        <hr />

        <b-form-file multiple>
            <template slot="file-name" slot-scope="{names}">
                <b-badge variant="dark">{{names[0]}}</b-badge>
                <b-badge v-if="names.length > 1" variant="dark" class="ml-1">
                    + {{names.length - 1}} More files
                </b-badge>
            </template>
        </b-form-file>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
  },

  data () {
    return {
        file_1: null,
        file_2: null,
        file_3: null
    }
  },

  methods: {
  }
}
</script>

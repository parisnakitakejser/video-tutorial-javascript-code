<template>
    <b-container>

      <b-form-tags v-model="tag_value_1" no-outer-focus class="mb-2">
        <template v-slot="{tags, inputAttrs, inputHandlers, tagVariant, addTag, removeTag}">
          <b-form-group>
            <b-form-input
              v-bind="inputAttrs"
              v-on="inputHandlers"
              placeholder="New tag - Press enter to add"
              class="form-control"
            ></b-form-input>
            <b-input-group-append>
              <b-button @click="addTag()" variant="primary">Add</b-button>
            </b-input-group-append>
          </b-form-group>

          <div class="d-inline-block" style="font-size: 1.5rem;">
            <b-form-tag
              v-for="tag in tag_value_1"
              :key="tag"
              @remove="removeTag(tag)"
              :title="tag"
              variant="primary"
              class="mr-1"
            >{{tag}}</b-form-tag>
          </div>
        </template>
      </b-form-tags>

      <hr />

      <b-form-group>
        <b-form-tags v-model="tag_value_2" no-outer-focus add-on-change class="mb-2">
          <template v-slot="{tags, inputAttrs, inputHandlers, disabled, removeTag}">
            <ul v-if="tag_value_2.length > 0" class="list-inline d-inline-block mb-2">
              <li v-for="tag in tag_value_2" :key="tag" class="list-inline-item">
                <b-form-tag
                    @remove="removeTag(tag)"
                    :title="tag"
                    variant="info"
                    :disabled="disabled"
                >{{tag}}</b-form-tag>
              </li>
            </ul>

            <b-form-select
            v-bind="inputAttrs"
            v-on="inputHandlers"
            :disabled="disabled || tag_value_2_options.length === 0"
            :options="tag_value_2_options">
              <template v-slot:first>
                <option disabled value="">Choose a tag...</option>
              </template>
            </b-form-select>
          </template>
        </b-form-tags>
      </b-form-group>

      <hr />

      <b-form-tags v-model="tag_value_3" no-outer-focus class="mb-2">
        <template v-slot="{tag, disabled, addTag, removeTag}">

          <ul v-if="tag_value_3.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tag_value_3" :key="tag" class="list-inline-item">
              <b-form-tag
                @remove="removeTag(tag)"
                :title="tag"
                :disabled="disabled"
                variant="info"
              >{{tag}}</b-form-tag>
            </li>
          </ul>

          <b-dropdown size="sm" variant="outline-secondary" block menu-class="w-100">
            <template v-slot:button-content>
              <b-icon icon="tag-fill"></b-icon> Choose tag
            </template>

            <b-dropdown-form @submit.stop.prevent="() => {}">
              <b-form-group
                label-for="tag-search-input"
                label="Search"
                label-cols-md="auto"
                class="mb-0"
                label-size="sm"
                :description="searchDesc"
                :disabled="disabled"
              >
                <b-form-input
                  v-model="search"
                  id="tag-search-input"
                  type="search"
                  size="sm"
                  autocomplete="off"
                ></b-form-input>
              </b-form-group>
            </b-dropdown-form>

            <b-dropdown-divider></b-dropdown-divider>

            <b-dropdown-item-button
              v-for="option in available_options"
              :key="option"
              @click="on_option_click({option, addTag})"
            >{{option}}</b-dropdown-item-button>
            <b-dropdown-text v-if="available_options.length === 0">
              There are no tags available to select
            </b-dropdown-text>
          </b-dropdown>



        </template>
      </b-form-tags>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    criteria () {
      return this.search.trim().toLowerCase();
    },

    available_options () {
      const criteria = this.criteria

      const options = this.tag_value_3_options.filter(opt => this.tag_value_3.indexOf(opt) === -1)

      if (criteria) {
        return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1)
      }

      return options
    },

    searchDesc () {
      if (this.criteria && this.available_options.length === 0) {
        return 'There are no tags matching your search criteria'
      }

      return ''
    }
  },

  data () {
    return {
      tag_value_1: ['tag1', 'tag2', 'tag3'],
      tag_value_2: ['tag1', 'tag2', 'tag3'],
      tag_value_3: ['tag1', 'tag2', 'tag3'],

      tag_value_2_options: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'],
      tag_value_3_options: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'],

      search: ''
    }
  },

  methods: {
    on_option_click({option, addTag}) {
      addTag(option)
      this.search = '';
    }
  }
}
</script>

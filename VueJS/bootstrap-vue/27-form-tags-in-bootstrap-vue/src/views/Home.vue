<template>
    <b-container>

      <b-form-tags v-model="tag_value_1" class="mb-2"></b-form-tags>
      <code>Tags: {{tag_value_1}}</code>

      <hr />

      <b-form-tags
          v-model="tag_value_2"
          class="mb-2"
          separator=" ,;"
          no-add-on-enter
          remove-on-delete
      ></b-form-tags>
      <code>Tags: {{tag_value_2}}</code>

      <hr />

      <b-form-tags
          v-model="tag_value_3"
          class="mb-2"
          separator=" ,;"
          no-add-on-enter
          remove-on-delete
          tag-pills
          tag-variant="primary"
          size="lg"
      ></b-form-tags>
      <code>Tags: {{tag_value_3}}</code>

      <hr />

      <b-form-tags
        v-model="tag_value_4"
        :tag-validator="validator"
        placeholder="Enter tags 2-6 chars each tags"
        separator=" "
        @tag-state="onTagState"
      ></b-form-tags>
      <code class="mt-2">Tags: {{tag_value_4}}</code><br />
      <strong>Event values</strong>
      <ul>
        <li>validTags: {{validTags}}</li>
        <li>invalidTags: {{invalidTags}}</li>
        <li>duplicateTags: {{duplicateTags}}</li>
      </ul>

      <hr />

      <b-form-tags v-model="tag_value_5" no-outer-focus class="mb-2">
        <template v-slot="{tags, inputAttr, inputHandlers, addTag, removeTag}">
          <b-input-group>
            <input
                v-bind="inputAttr"
                v-on="inputHandlers"
                placeholder="New tag - press enter to add"
                class="form-control"
            >

            <b-input-group-append>
              <b-button @click="addTag()" variant="primary">Add</b-button>
            </b-input-group-append>
          </b-input-group>

          <ul
              class="list-unstyled d-inline-flex flex-wrap mb-0"
              aria-live="polite"
              aria-atomic="false"
              aria-relevant="additions removals"
          >
            <b-card
              v-for="tag in tag_value_5"
              :key="tag"
              :id="`tag-value-5-tag_${tag.replace(/\s/g, '_')}_`"
              tag="li"
              class="mt-1 mr-1"
              body-class="py-1 pr-2 text-nowrrap"
            >
              <strong>{{tag}}</strong>

              <b-button
                  @click="removeTag(tag)"
                  variant="link"
                  size="sm"
                  :aria-controls="`tag-value-5-tag_${tag.replace(/\s/g, '_')}_`"
              >
                remove
              </b-button>
            </b-card>
          </ul>
        </template>
      </b-form-tags>

      <code>Tags: {{tag_value_5}}</code>

    </b-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
  },

  data () {
    return {
      tag_value_1: null,
      tag_value_2: ['a', 'b', 'c', 'd', 'e', 'f'],
      tag_value_3: ['a', 'b', 'c', 'd', 'e', 'f'],
      tag_value_4: ['abc', 'def'],
      tag_value_5: null,

      validTags: [],
      invalidTags: [],
      duplicateTags: [],
    }
  },

  methods: {
    onTagState(valid, invalid, duplicate) {
      this.validTags = valid;
      this.invalidTags = invalid;
      this.duplicateTags = duplicate;
    },

    validator(tag) {
      return tag.length >= 2 && tag.length <= 6
    }
  }
}
</script>

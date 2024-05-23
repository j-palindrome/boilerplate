import { defineArrayMember, defineField, defineType } from 'sanity'

const service = defineType({
  name: 'service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string'
    }),
    defineField({
      name: 'order',
      type: 'number'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: rule => rule.required(),
      options: {
        source: 'title',
        maxLength: 32
      }
    }),
    defineField({
      name: 'banner',
      type: 'bannerInfo'
    }),
    defineField({
      name: 'description',
      type: 'content'
    })
  ]
})

export default service

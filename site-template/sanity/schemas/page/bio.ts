import { defineField, defineType } from 'sanity'

const bio = defineType({
  name: 'about',
  title: 'Bio',
  type: 'document',
  fields: [
    defineField({
      name: 'bio',
      type: 'description',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'headshot',
      type: 'image',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'cv',
      type: 'file',
      options: { accept: 'application/pdf' }
    }),
    defineField({
      name: 'resume',
      title: 'Résume',
      type: 'file',
      options: { accept: 'application/pdf' }
    })
  ],
  preview: {
    select: {
      title: 'Bio'
    }
  }
})

export default bio

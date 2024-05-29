import { defineType, defineField } from 'sanity'

const bannerInfo = defineType({
  name: 'bannerInfo',
  type: 'object',
  fields: [
    defineField({
      name: 'bannerType',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'vertical',
        list: ['image', 'video', 'code']
      },
      validation: rule => rule.required(),
      initialValue: 'image'
    }),
    defineField({
      name: 'imageBanner',
      type: 'imageInfo',
      hidden: ({ parent }) => parent?.bannerType !== 'image'
      // validation: rule =>
      //   rule.custom((value, context) => {
      //     if (context.parent!['bannerType'] === 'image' && !value)
      //       return 'Needs image banner'
      //     return true
      //   })
    }),
    defineField({
      name: 'videoBanner',
      type: 'file',
      options: {
        accept: 'video/webm'
      },
      description: (
        <div>
          Recommended: A 5-10 second video in <b>.webm</b> format with no audio.
          You can convert a video{' '}
          <a href='https://cloudconvert.com/mov-to-webm'>here</a>
        </div>
      ),
      hidden: ({ parent }) => parent?.bannerType !== 'video'
      // validation: rule =>
      //   rule.custom((value, context) => {
      //     if (context.parent!['bannerType'] === 'video' && !value)
      //       return 'Needs video banner'
      //     return true
      //   })
    }),
    defineField({
      name: 'generativeBanner',
      type: 'slug',
      description:
        'The ID of the generative banner to use (stored internally in the website).',
      hidden: ({ parent }) => parent?.bannerType !== 'code'
      // validation: rule =>
      //   rule.custom((value, context) => {
      //     if (context.parent!['bannerType'] === 'generative' && !value)
      //       return 'Needs generative banner'
      //     return true
      //   })
    })
  ]
})

export default bannerInfo

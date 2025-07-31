// composables/articleBlock.js

import { ref } from 'vue'

export function useArticleBlock() {
  // Article data (title, image, description, etc.)
  const articles = ref([
    {
      id: 1,
      title:
        'រដ្ឋមន្ត្រីក្រសួងព័ត៌មានអំពាវនាវ​ឱ្យបណ្តាប្រទេសជាសមាជិក AIBD ចូលរួមជាមួយកម្ពុជាក្នុងយុទ្ធនា ការ​ប្រយុទ្ធ​ប្រឆាំងនឹងព័ត៌មានក្លែងក្លាយ',
      image:
        'https://ams.com.kh/central/_next/image?url=https%3A%2F%2Fasset.ams.com.kh%2Fcentral%2Fmedia%2F2024%2F09%2F458106798_10232329826284014_5071031252647632953_n.jpg&w=1200&q=75',
      description: '',
      category: 'Society', // Matches 'article_society.vue'
    },
    {
      id: 2,
      title:
        'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ៖ ជនក្បត់ជាតិ៣ជំនាន់ ធ្វើនយោបាយគ្មានអ្វីក្រៅតែពីការញុះញង់ បំផ្លើសបំភ្លៃ លាបពណ៌ គ្មានការពិត',
      image:
        'https://ams.com.kh/central/_next/image?url=https%3A%2F%2Fasset.ams.com.kh%2Fcentral%2Fmedia%2F2024%2F08%2FRainsy1.jpg&w=1200&q=75',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
      category: 'Society',
    },
    {
      id: 3,
      title:
        'អ្នកនាំពាក្យក្រសួងព័ត៌មាន៖ ការធ្វើដំណើរកម្សាន្ត​ទៅកាន់​ព្រំដែនបណ្ដាខេត្តទាំង៤ នឹងបំផុសមនសិការស្រលាញ់ទឹកដី ស្រលាញ់ជាតិកាន់តែខ្លាំងឡើងទៅដល់គ្រប់ជនរួមជាតិ',
      image:
        'https://ams.com.kh/central/_next/image?url=https%3A%2F%2Fasset.ams.com.kh%2Fcentral%2Fmedia%2F2024%2F08%2Fphoto_2024-02-16_09-55-37.jpg&w=1920&q=75',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
      category: 'Society',
    },
    {
      id: 4,
      title:
        'ក្នុងការបោះបង្គោលខណ្ឌសីមាព្រំដែនដែលជាបូរណភាពទឹកដីនិងអធិបតេយ្យភាពជាតិ គេមិនដែលដេកស្រម៉ៃ និងយកផែនទី​ google map មកប្រើនោះទេ',
      image:
        'https://ams.com.kh/central/_next/image?url=https%3A%2F%2Fasset.ams.com.kh%2Fcentral%2Fmedia%2F2024%2F09%2Fphoto_2024-09-01_22-59-44.jpg&w=1080&q=75',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
      category: 'Society',
    },
    {
      id: 5,
      title:
        'បេក្ខជនជាង ១ម៉ឺននាក់ចូលរួមប្រឡងប្រជែងជ្រើសរើសរើសគ្រូបង្រៀនមត្តេយ្យសិក្សា ឱ្យចូលបម្រើការងារនៅក្នុងក្របខណ្ឌក្រសួងអប់រំ លើវិញ្ញសារសរសេរលើកទី១',
      image:
        'https://ams.com.kh/central/_next/image?url=https%3A%2F%2Fasset.ams.com.kh%2Fcentral%2Fmedia%2F2024%2F09%2Fphoto_2024-09-01_18-26-08.jpg&w=1080&q=75',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
      category: 'Society',
    },
    {
      id: 6,
      title:
        'អាជ្ញាធរនៅក្នុងតំបន់បាននិយាយ កាលពីថ្ងៃសៅរ៍ថា ឧទ្ធម្ភាគចក្រមួយគ្រឿង ដែលដឹកមនុស្ស ២២នាក់',
      image:
        'https://ams.com.kh/central/_next/image?url=https%3A%2F%2Fasset.ams.com.kh%2Fcentral%2Fmedia%2F2024%2F09%2Fphoto_2024-09-01_10-07-33.jpg&w=1080&q=75',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
      category: 'International News', // Matches 'article_internationalnews.vue'
    },
    {
      id: 7,
      title:
        'ប្រធានាធិបតីនៃប្រទេសអ៊ីរ៉ង់ លោក Pezeshkian កាលពីថ្ងៃសៅរ៍ បានផ្តល់បទសម្ភាសន៍តាមទូរទស្សន៍ ជាលើកដំបូង ចាប់តាំងពីការបង្កើតគណៈរដ្ឋមន្ត្រីមក',
      image:
        'https://ams.com.kh/central/_next/image?url=https%3A%2F%2Fasset.ams.com.kh%2Fcentral%2Fmedia%2F2024%2F09%2Fphoto_2024-09-01_08-30-20.jpg&w=1080&q=75',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
      category: 'International News',
    },
    {
      id: 8,
      title:
        'អ៊ីស្រាអែលបានយល់ព្រមផ្អាកការប្រយុទ្ធ នៅតំបន់ហ្គាហ្សា ដើម្បីអនុញ្ញាតឱ្យកុមារតូចៗ',
      image:
        'https://ams.com.kh/central/_next/image?url=https%3A%2F%2Fasset.ams.com.kh%2Fcentral%2Fmedia%2F2024%2F08%2Fphoto_2024-08-31_10-59-49.jpg&w=1080&q=75',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
      category: 'International News',
    },
    {
      id: 9,
      title: 'ផ្លូវលេបឡានពេលកំពុងបើកបរនៅទីក្រុងសេអ៊ូល',
      image:
        'https://ams.com.kh/central/_next/image?url=https%3A%2F%2Fasset.ams.com.kh%2Fcentral%2Fmedia%2F2024%2F08%2Fphoto_2024-08-31_08-44-54.jpg&w=1080&q=75',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
      category: 'International News',
    },
    {
      id: 10,
      title:
        'គ្លីនិកមួយកន្លែង នៅភាគខាងលិច ប្រទេសយេម៉ែន ត្រូវបានជន់លិច ដោយគេសង្ស័យថា ក៏មានជាអ្នកជំងឺអាសន្នរោគផងដែរ',
      image:
        'https://ams.com.kh/central/_next/image?url=https%3A%2F%2Fasset.ams.com.kh%2Fcentral%2Fmedia%2F2024%2F08%2Fphoto_2024-08-29_14-54-26.jpg&w=1080&q=75',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
      category: 'International News',
    },
    {
      id: 11,
      title:
        'បុគ្គលិកពីរនាក់បានស្លាប់ ហើយម្នាក់ទៀត រងរបួសធ្ងន់ធ្ងរ អំឡុងហេតុការណ៍ផ្ទុះកង់យន្តហោះ នៅក្នុងទីក្រុង Atlanta រដ្ឋ Georgia',
      image:
        'https://ams.com.kh/central/_next/image?url=https%3A%2F%2Fasset.ams.com.kh%2Fcentral%2Fmedia%2F2024%2F08%2Fphoto_2024-08-28_21-15-05.jpg&w=1080&q=75',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
      category: 'International News',
    },
    {
      id: 12,
      title:
        'សល់ដីតិចតួច គួរដាំដំណាំជុំវិញផ្ទះ ងាយៗ និងផ្ដល់ប្រយោជន៍ច្រើនចំពោះសុខភាព',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/Reandam5.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 13,
      title:
        'មិនធម្មតា ! នំបាក់បិនភូមិព្រះដាក់ សម្រាប់ថ្ងៃឈប់សម្រាក និងបុណ្យទាន អ្នកខ្លះអាចលក់បានរហូតជិតដល់ ៣លានរៀល ក្នុង ១ថ្ងៃ',
      image: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/Bb.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 14,
      title:
        'សហគ្រាសកែច្នៃគ្រាប់ស្វាយចន្ទីមានការវិវត្តតិចតួច ខណៈអ្នកជំនាញថាការខ្វះទុនបង្វិលនៅតែជាបញ្ហាប្រឈម',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/09/eee0e73bc381641760d151f0704e96fb-1.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 15,
      title:
        'ទោះបីតម្លៃទីផ្សារគោធ្លាក់ចុះ ប៉ុន្តែសម្រាប់កសិករវ័យឆ្លាតនៅតែអាចយករួចខ្លួនបាន និងមិនខាតបង់',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/Boran2-2048x1118.png',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 16,
      title:
        'ប្រហុកខ្ទិះអនាម័យ អាចក្លាយជាមុខម្ហូបងាយស្រួលសម្រាប់រៀបចំចង្ហាន់ប្រគេនព្រះសង្ឃក្នុងរដូវកាន់បិណ្ឌ',
      image: 'https://economy.ams.com.kh/wp-content/uploads/2024/09/ml6.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 17,
      title: 'អាជីវករត្រៀមវេចនំខ្មែរសម្រាប់លក់ក្នុងពិធីសែនក្បាលទឹកខាងមុខនេះ',
      image: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/Os.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 18,
      title:
        'Gumball 3000 កំពុងសាងព្រឹត្តិការណ៍ជាប្រវត្តិសាស្ត្រនៅក្នុងទឹកដីដ៏អច្ឆរិយៈនៃខេត្តសៀមរាប',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/09/IMG_9850-2048x1365.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 19,
      title:
        'តម្លៃមាសធ្លាក់ចុះបន្តិចពិតមែន ប៉ុន្តែស្ថិតនៅក្នុងកម្រិតខ្ពស់ជាង ២ ៥០០ ដុល្លារក្នុងមួយអោន',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/07/gold-prices-hit-4-week-low-retreat-as-dollar-strengthens.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 20,
      title:
        '១សប្តាហ៍ចុងក្រោយ កម្ពុជាទទួលបានទេសចរជាង៣៤ម៉ឺននាក់ រកចំណូលបានជាង៦៥ម៉ឺនដុល្លារ',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/TS-Ams-1.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 21,
      title:
        'អត្រាប្រជាជនវ័យចំណាស់នៅចិនអាចកាត់បន្ថយ GDP សម្រាប់មនុស្សម្នាក់ច្រើនជាង ១០ ភាគរយ',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/china-aging-population-1024x576-1.png',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 22,
      title:
        'តម្លៃប្រេងឆៅបានបន្តឡើងថ្លៃ បន្ទាប់ពីផលិតកម្មប្រេងរបស់លីប៊ីធ្លាក់ចុះ ១,៥ លានបារ៉ែល',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/Diversification-from-Oil-to-Other-Industries-in-Middle-East.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 23,
      title:
        'រាជរដ្ឋាភិបាល​សម្រេច​បង្កើត​ក្រុង​ថ្មីមួយទៀត​នៅខេត្តព្រះសីហនុ ដែលធ្វើឱ្យ​ខេត្ត​នេះ​មានក្រុ​ងចំនួន​៣​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/1-Recovered-1-2048x1071.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 24,
      title:
        'ច្បាស់ហើយ ! ស្ពានមិត្តភាពកម្ពុជា-កូរ៉េ តម្លៃ២៣៥លានដុល្លារ នឹងបើកការដ្ឋានសាងសង់ខែមិថុនា ឆ្នាំ២០២៥​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/image-438-1024x576-1.png',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 25,
      title:
        'រយៈ​ពេល​១ឆ្នាំពេញ ចិនបោះ​ទុនវិនិយោគនៅកម្ពុជាក្នុងទំហំទឹកប្រាក់ ​៣.៥ពាន់​លានដុល្លារ​អាមេរិក​​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/img-6992.jpeg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 26,
      title:
        'គិតត្រឹមដើមខែសីហា ឆ្នាំ២០២៤ ក្រសួងរៀបចំដែនដី វាស់វែងដីដែលត្រូវចុះបញ្ជីមានលក្ខណៈជាប្រព័ន្ធបានប្រមាណ២លានក្បាលដី​​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/456580632_898644808973383_2275012086796405724_n.jpg.webp',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 27,
      title:
        '​មន្ត្រីជាន់ខ្ពស់​បញ្ជាក់ថា រដ្ឋ​នឹង​ផ្ដល់​សំណង​រាល់​ការ​ប៉ះពាល់ទាំងអស់​​ដែលស្ថិតក្នុងគម្រោងព្រែកជីកហ្វូណន តេជោ​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/454910381_816342927343370_7454058827305758763_n.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 28,
      title:
        'ធនាគារជាតិនៃកម្ពុជា ដាក់ចេញសារាចរណែនាំ ស្តីពីការរៀបចំឥណទានឡើងវិញសម្រាប់គ្រឹះស្ថានធនាគារ និងហិរញ្ញវត្ថុ​',
      image: 'https://economy.ams.com.kh/wp-content/uploads/2024/08/NBC-2.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 29,
      title:
        'កិច្ចពិភាក្សា «រៀបចំអនាគត ផ្ដើមចេញពីការរៀបចំហិរញ្ញវត្ថុ» បានអប់រំសិស្ស-និស្សិតឱ្យ​ចេះចាត់​ចែងលុយកាក់កាន់តែប្រសើរ​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/01_FSPD_ATMB03-2048x1573.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 30,
      title:
        'រាជរដ្ឋាភិបាលគ្រោងបោះផ្សាយលក់មូលបត្ររដ្ឋមិនឱ្យលើសពី ១ ប៊ីលានដុល្លារក្នុងរយៈពេល ៥ឆ្នាំ​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/photo_2021-06-04_10-34-05.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 31,
      title:
        'ការចាប់យក និងអនុវត្តបច្ចេកវិទ្យាហិរញ្ញវត្ថុ នឹងទទួលបានអត្ថប្រយោជន៍យ៉ាងធំធេងដល់សេដ្ឋកិច្ចជាតិកម្ពុជា​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/10/bakong-settlementpayment.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 32,
      title:
        'កម្មវិធី «វិថីហិរញ្ញវត្ថុរដូវកាលទី២» បានរៀបចំកិច្ចពិភាក្សាក្រោមប្រធានបទ « រៀបចំគោលដៅអនាគតដោយចាប់ផ្តើមរៀបចំផែនការហិរញ្ញវត្ថុ»​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/IMG_9125-2.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 33,
      title:
        'វិស័យមីក្រូហិរញ្ញវត្ថុមិនមានបញ្ហាកង្វះសាច់ប្រាក់ បើទោះអត្រាឥណទានមិនដំណើរការកើនឡើង​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/NBC-Money-Loan.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 34,
      title:
        '«កម្មវិធីនវានុវត្តន៍បញ្ច្រាស» លើកស្ទួយបច្ចេកវិទ្យាហិរញ្ញវត្ថុ ជំរុញវឌ្ឍនភាពសេដ្ឋកិច្ចឌីជីថល​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/09/photo_2024-09-01_07-03-02-1.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 35,
      title:
        'ស្ថាបនិក Telegram លោក Pavel ជាអ្នកណា ? ហើយហេតុអ្វីបានមានការចាប់ឃាត់ខ្លួនរូបលោកនៅបារាំង ? ​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/bdfb72b4ee_jn4kxjvzddu-1.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 36,
      title:
        'អ្នកជំនាញពន្យល់ពីរបៀបដែលទីលំហអាកាសផ្តល់ប្រយោជន៍ដល់មនុស្សជាតិ ខណៈដែលបច្ចុប្បន្នវាជាចំណែកសេដ្ឋកិច្ចដ៏ធំមួយរបស់ពិភពលោក​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/iStock-1396518375-scaled-1.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 37,
      title:
        'ស្វែងយល់ពីប្រទេសកំពូលៗទាំង ១០ ដែលឈានមុខគេផ្នែកបញ្ញាសិប្បនិម្មិត AI ​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/Screenshot-2024-08-28-124012.png',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 38,
      title:
        'ក្រុងប៉េកាំង ចាយលុយជាង ១៥ពាន់លានដុល្លារកាលពីឆ្នាំ២០២៣សម្រាប់តែសមយុទ្ធយោធាក្បែរ និងជុំវិញកោះតៃវ៉ាន់​',
      image:
        'https://economy.ams.com.kh/wp-content/uploads/2024/08/000_36et8b3.avif',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 39,
      title:
        'ថ្មី! រោងកុន Hotpot ដំបូងគេនៅម៉ាឡេស៊ីបើកឱ្យអ្នកទស្សនាញ៉ាំស៊ុបបណ្ដើរ មើលកុនបណ្ដើរ​',
      image:
        'https://infotainment.ams.com.kh/wp-content/uploads/2024/08/Untitled-2-24.png',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 40,
      title:
        'ចូលរួមរំលែកទុក្ខ! ស្រ្តីចំណាស់បំផុតក្នុងពិភពលោក Maria Branyas Morera បានលាចាកលោកក្នុងវ័យ ១១៧ ឆ្នាំ​',
      image:
        'https://infotainment.ams.com.kh/wp-content/uploads/2024/08/Thumbnail-10-1.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 41,
      title:
        'ស្ទើរមិនគួរឱ្យជឿ! ទីក្រុងក្រោមទឹកអស្ចារ្យទាំង ៥ ដែលនៅតែមានក្នុងពិភពលោក',
      image:
        'https://infotainment.ams.com.kh/wp-content/uploads/2024/07/Thumbnail-6-1.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 42,
      title: 'បចំណាត់ថ្នាក់ប្រទេសនៅអាស៊ីទាំង ៥ ដែលមានអត្រាលែងលះខ្ពស់បំផុត',
      image:
        'https://infotainment.ams.com.kh/wp-content/uploads/2024/07/Thumbnail-2.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 43,
      title:
        'ប្រជាជនថៃនាំគ្នាសាក់យ័ន្តតុក្កតា Labubu ជាមួយអក្សរខ្មែរបុរាណដើម្បីបានលាភសំណាង',
      image:
        'https://infotainment.ams.com.kh/wp-content/uploads/2024/07/Untitled-1-3.png',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 44,
      title:
        'មកស្គាល់ម៉ាករថយន្តដ៏ប្រណីត របស់លោកឧកញ៉ា លាង ពៅ (ភីធើរ) លេចធ្លោខ្លាំងនៅ Pre-Event GUMBALL 3000',
      image:
        'https://infotainment.ams.com.kh/wp-content/uploads/2024/09/Peter.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 45,
      title:
        'ឧកញ៉ា ខេមរៈ សិរីមន្ត តែងខ្លួនឡើងអេម ជាមួយ Lamborghini ចូលរួមក្បួន GUMBALL 3000 ទៅសៀមរាប',
      image:
        'https://infotainment.ams.com.kh/wp-content/uploads/2024/08/Khemrak.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 46,
      title:
        'ស្ងាត់ៗតារាសម្ដែង TVB គូនេះសង្ស័យមានដំណឹងល្អឆាប់ៗ ក្រោយមានពាក្យចចាមអារ៉ាមទាក់ទងគ្នារយៈពេល ៥ ឆ្នាំ',
      image:
        'https://infotainment.ams.com.kh/wp-content/uploads/2024/08/Thumbnail-17-1-3.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 47,
      title:
        'ឆែកមើលតើមាន ឬនៅ? ទ្រព្យសម្បត្តិ ៣ យ៉ាងដែលមានតម្លៃបំផុតសម្រាប់គ្រួសារ',
      image:
        'https://infotainment.ams.com.kh/wp-content/uploads/2024/08/Thumbnail-16-1.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 48,
      title:
        'សម្ដែងល្អខ្លាំងពេក! Angelina Jolie ស្រក់ទឹកភ្នែក ខណៈមនុស្សមួយរោងកុនក្រោកឈរទះដៃ ៨​ នាទីក្រោយទស្សនាភាពយន្តថ្មីរបស់ខ្លួន',
      image:
        'https://infotainment.ams.com.kh/wp-content/uploads/2024/08/Untitled-2-35.png',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 49,
      title:
        'Pep សរសើរកូនក្រុម Man City មួយរូប ថាស្ថិតក្នុងកម្រិតប្រហាក់ប្រហែល Ronaldo និង Messi',
      image: 'https://i.ytimg.com/vi/gi18bln8USA/maxresdefault.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 50,
      title:
        'West Ham ជួបក្រុមការពារជើងឯក ខណៈ Chelsea នឹងលេងទល់ក្រុមមកពីលីគ៤ក្នុងជុំទី៣ League Cup',
      image:
        'https://cdn.whufc.com/sites/default/files/styles/cc_960x540/public/2024-10/things_we_loved_16x9_24_25itfc.jpg?h=d5a100e6&itok=VMqgQS6a',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 51,
      title:
        'Jake Paul មិនជឿថា Ronaldo អាចប្រជែងចំនួន Subscriber លើយូធូបជាមួយ MrBeast បានទេ',
      image: 'https://i.ytimg.com/vi/aME1cJguDiY/maxresdefault.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 52,
      title:
        'Mbappe អាចនឹងអង្គុយបម្រុង បើ Ancelotti ប្រើក្បួនចាស់ក្នុងប្រកួត UEFA Super Cup',
      image: 'https://asset.ams.com.kh/sports/media/GUyU9R2XYAAITDr.jpg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 53,
      title:
        'Hansi Flick បោះបង់ការនាំយក អតីតខ្សែប្រយុទ្ធស្លាបមួយរូបត្រលប់មក Barcelona វិញ',
      image:
        'https://i.ytimg.com/vi/AIu6YqGlRu4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGBMgKSh_MA8=&rs=AOn4CLDkVT_GYVARhLktP9tu7O0npDoYqg',
      description: 'មេដឹកនាំបក្សមហាសាមគ្គីជាតិខ្មែរ...',
    },
    {
      id: 54,
      title:
        'កីឡាករ ឈឹម ពិសិដ្ឋ បង្ហាញខ្លួននៅទីលាន Sepang Circurt ជាឱកាសពង្រឹង​សមត្ថភាព',
      image:
        'https://ams.com.kh/central/_next/image?url=https%3A%2F%2Fasset.ams.com.kh%2Fcentral%2Fmedia%2F2024%2F08%2Fphoto_2024-08-29_18-36-29.jpg&w=1920&q=75',
      description:
        '(ភ្នំពេញ)៖ អ្នកប្រណាំងម៉ូតូស្ព័រកម្ពុជា ឈឹម ពិសិដ្ឋ បានចេញដំណើរទៅចូលរួម ប្រណាំងម៉ូតូ Malaysia Speed Festival (MSF) Merdeka Race 2024 នៅប្រទេសម៉ាឡេស៊ី នាព្រឹកថ្ងៃទី២៩ ខែសីហា ឆ្នាំ២០២៤ ។',
    },
    {
      id: 55,
      title:
        'ឯកឧត្តម ទៀ ស្យាម ៖ ហេដ្ឋារចនាសម័ន្ធ ទេសភាព និងការរស់នៅ បង្ហាញពីភាពសុខដុមរមនា',
      image:
        'https://asset.ams.com.kh/central/media/2024/08/photo_2024-08-26_15-57-04-1024x682.jpg',
      description:
        '(ភ្នំពេញ)៖ ឯកឧត្តម ទៀ ស្យាម ប្រធានក្លឹបមហាគ្រួសាររថយន្ត Off-Road កម្ពុជា បានបញ្ជាក់ថា ការធ្វើដំណើរទេសចរណ៍មានការចូលរួមច្រើនពីបងប្អូនក្រុមរថយន្ត Off-Road មកពីគ្រប់ខេត្ត ដើម្បីចូលរួមផ្សព្វផ្សាយពីសក្តានុពលធនធានធម្មជាតិខេត្តទាំង៤ គឺខេត្តក្រចេះ មណ្ឌលគីរី រតនៈគីរី និងខេត្តស្ទឹងត្រែង។ នេះជាការបញ្ជាក់របស់ ឯកឧត្តម ក្រោយបញ្ចប់បេសកម្មដំណើរកម្សាន្តរយៈពេល ៣ថ្ងៃ នៅភូមិភាគឦសាន នាល្ងាចថ្ងៃទី២៥ ខែសីហា ឆ្នាំ២០២៤ ។',
    },
    {
      id: 56,
      title:
        'ឯកឧត្តម យី វាសនា ៖ ក្រៅពីការប្រកួតប្រជែងមេដាយ គឺបណ្តាប្រទេសនានា រួមទាំងកម្ពុជា ទទួលបានមិត្តភាព សាមគ្គីភាព កិត្តិយសជាតិ',
      image:
        'https://asset.ams.com.kh/central/media/2024/09/DAC07354-1024x683.jpg',
      description:
        '(ភ្នំពេញ)៖ប្រតិភូកីឡាប៉ារ៉ាឡាំពិកកម្ពុជាបានវិលត្រឡប់មកដល់មាតុប្រទេសវិញហើយ បន្ទាប់ពីបញ្ចប់បេសកកម្មចូលរួមប្រកួតកីឡាប៉ារ៉ាឡាំពិកពិភពលោក នៅទីក្រុងប៉ារីស ប្រទេសបារាំង ពីថ្ងៃទី២៦ ខែសីហា ដល់ថ្ងៃទី១០ ខែកញ្ញា ឆ្នាំ២០២៤ ដោយទទួលការស្វាគមន៍យ៉ាងកក់ក្តៅពី ឯកឧត្តម សុខ សប្បាយណា ប្រធានក្រុមការងារ Beyond The Games និងមន្ត្រី កីឡាករ កីឡាការិនីពិការកម្ពុជាជាច្រើននាក់ កាលពីយប់ថ្ងៃទី១០ ខែកញ្ញា ឆ្នាំ២០២៤។',
    },
    {
      id: 57,
      title:
        'គ្រូបង្វឹក កីឡាករ កីឡាការិនីហាប់គីដូ ១០នាក់ទទួលបានសញ្ញាបត្រខ្សែក្រវាត់ កម្រិតដាន់នីមួយៗពីសមាគមហាប់គីដូពិភពលោក',
      image:
        'https://asset.ams.com.kh/central/media/2024/08/1R4A5421-copy-1024x682.jpg',
      description:
        'សហព័ន្ធខ្មែរកីឡាហាប់គីដូបានរៀបចំពិធីប្រគល់សញ្ញាបត្របញ្ជាក់ខ្សែក្រវាត់ខ្មៅតាមកម្រិតដាន់នីមួយៗផ្តល់ជូនដោយសមាគមហាប់គីដូពិភពលោកជូនដល់ថ្នាក់ដឹកនាំ គ្រូបង្វឹក និងកីឡាករ កីឡាការិនីចំនួន ១០នាក់ ដែលបានប្រារព្ធធ្វើឡើង កាលពីល្ងាចថ្ងៃទី២៦ ខែសីហា ឆ្នាំ២០២៤ នៅទីស្នាក់ការគណៈកម្មាធិការជាតិអូឡាំពិកកម្ពុជា (NOCC)',
    },
    {
      id: 58,
      title:
        'អត្តពលិក ITF វិញ្ញាសាក្រុមបុរស-នារី ឈ្នះប្រាក់ ជាមេដាយទី៣​ និងទី៤ជូន កម្ពុជា​',
      image:
        'https://asset.ams.com.kh/central/media/2024/08/photo_2024-08-22_12-16-24-1024x768.jpg',
      description:
        'ឥណ្ឌា-សូមអបអរសាទរ កម្ពុជាឈ្នះមេដាយប្រាក់២គ្រឿង​ បន្ថែមទៀត​ លើវិញ្ញាសាមេគុន ជាក្រុមនារី និង​ ជាក្រុមបុរស​ នៅមុននេះបន្តិច​ ។ ប្រកួតផ្តាច់ព្រ័ត្រ ចុងក្រោយទាំងក្រុមបុរស​ និង​ នារី​ គឺយេីងប៉ះកូរ៉េខាងជេីង​ ដែលជាម្ចាស់ក្បាច់គុនដូចគ្នា​ ជាលទ្ធផលមិនគាប់ប្រសេីរ​ ទេីបយេីងឈ្នះត្រឹមមេដាយប្រាក់៕ ចាន់ វិចិត្រ',
    },

    // Add more articles as needed
  ])

  return { articles }
}

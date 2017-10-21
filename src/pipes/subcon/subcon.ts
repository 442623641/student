import { Pipe, PipeTransform } from '@angular/core';
const subejects = {
  '总分': {
    'icon': 'star-outline',
    'color': '#f66e4f'
  },
  '数学': {
    'icon': 'imath',
    'color': '#54adff'
  },
  '地理': {
    'icon': 'igeography',
    'color': '#54adff',
  },
  '历史': {
    'icon': 'ihistory',
    'color': '#3ac8d2',
  },
  '物理': {
    'icon': 'ibulb',
    'color': '#7788f2',
  },
  '英语': {
    'icon': 'ienglish',
    'color': '#54adff',
  },
  '自定义': {
    'icon': 'icustom',
    'color': '#f66e4f',
  },
  '语文': {
    'icon': 'ichinese',
    'color': '#b564ef',
  },
  '政治': {
    'icon': 'ipolitics',
    'color': '#b564ef',
  },
  '化学': {
    'icon': 'ichemistry',
    'color': '#b564ef',
  },
  '生物': {
    'icon': 'ibiology',
    'color': '#b564ef',
  },
  '理科综合': {
    'icon': 'iscience',
    'color': '#b564ef',
  },
  '文科综合': {
    'icon': 'iliterature',
    'color': '#b564ef',
  },
  '理科': {
    'icon': 'iscience',
    'color': '#b564ef',
  },
  '文科': {
    'icon': 'iliterature',
    'color': '#b564ef',
  },
  'default': {
    'icon': 'iother',
    'color': '#54adff',
  },

}

/**
 * Generated class for the SubconPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'subcon',
})
export class SubconPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    if (!subejects[value]) {
      return subejects['default']['icon'];
    }
    return subejects[value]['icon'];
  }
}

@Pipe({
  name: 'subcolor',
})
export class SubcolorPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    if (!subejects[value]) {
      return subejects['default']['color'];
    }

    return subejects[value]['color'];
  }
}

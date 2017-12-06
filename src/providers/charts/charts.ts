import { Injectable } from '@angular/core';

/*
  Generated class for the ChartsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChartsProvider {
  colors: any = {
    primary: '#f66e4f',
    //text: '#414a60',
    line: "rgba(0,0,0,.05)",
    label: "#666",
    text: '#414a60',
  }
  constructor() {
    console.log('Hello ChartsProvider Provider');
  }

  ball(percent: number, score: number) {
    return {
      series: [{
        color: [this.colors.primary, this.colors.primary],
        type: 'liquidFill',
        radius: '74%',
        data: [percent, {
          value: percent,
          direction: 'left',
        }],
        itemStyle: {
          normal: {
            shadowBlur: 0,
            opacity: 0.35,
          }
        },
        backgroundStyle: {
          color: '#fff'
        },
        outline: {
          borderDistance: 0,
          itemStyle: {
            borderWidth: 4,
            borderColor: this.colors.primary,
            shadowBlur: 0,
          }
        },
        label: {
          normal: {
            show: false,
            color: this.colors.label,
            insideColor: this.colors.label,
            align: 'center',
            position: 'inside',
            formatter: [
              `{a|${score}}`,
              '{b|总分}',
              `{c|领先了${(percent*100).toFixed(2)}%的考生}`
            ].join('\n'),
            rich: {
              a: {
                lineHeight: 40,
                height: 40,
                fontWeight: 'bold',
                fontSize: 22,
                position: 'top',

              },
              b: {
                fontSize: 15,
                lineHeight: 35,
                height: 40,
              },
              c: {
                fontSize: 13,
              },
            }

          }
        },
        amplitude: '3.5%',
        waveLength: '90%',
      }]
    }
  }

  percents(category: any[], series: any[]) {
    return {
      color: [this.colors.primary],
      backgroundColor: '#fff',
      grid: {
        top: 16,
        left: 10,
        right: 20,
        bottom: 16,
        containLabel: true,

      },
      xAxis: {
        boundaryGap: [0, 0.01],
        type: 'value',
        position: 'top',
        axisLabel: {
          textStyle: {
            color: this.colors.label,
          },
          formatter: '{value}%',
        },
        axisLine: {
          lineStyle: {
            color: this.colors.line
          }
        },
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: this.colors.line,
          }
        },
      },
      yAxis: {
        type: 'category',
        data: category,
        axisLabel: {
          //formatter: '{value}',
          textStyle: {
            color: this.colors.label,
          },
          show: true
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: this.colors.line
          }
        },
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: this.colors.line,
          }
        }
      },
      series: [{
          type: 'bar',
          barWidth: 12,
          barGap: "20%",
          //barCategoryGap: "10%",
          itemStyle: {
            normal: {
              color: this.colors.primary,
              label: {
                show: true,
                textStyle: {
                  color: this.colors.label,
                },
                position: 'right',
                formatter: '{c}%',
              }
            }
          },
          data: series[0],
        },
        {
          barWidth: 12,
          //barCategoryGap: "10%",
          type: 'bar',
          itemStyle: {
            normal: {
              color: 'rgba(204, 204, 204, .8)',
              label: {
                show: true,
                textStyle: {
                  color: this.colors.label,
                },
                position: 'right',
                formatter: '{c}%',
              }
            }
          },
          data: series[1]
        }
      ]
    }
  }

  topicPercents(category, series) {
    return {
      color: [this.colors.primary],
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: category,
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          lineStyle: {
            color: this.colors.line
          }
        },
      }],
      yAxis: [{
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          lineStyle: {
            color: this.colors.line
          }
        },
      }],
      series: [{
        type: 'bar',
        barWidth: '40%',
        data: series
      }, ],
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter: '{c} 人'
        }
      }
    }
  }

  /**
   *学情分析
   */
  radar(obj: { legend, indicator, series }) {
    const icons = ['rect', 'circle', 'triangle'];
    return {
      // title: {
      //   bottom: 16,
      //   top: 16,
      //   left: 14,
      //   text: '学情分析',
      //   textStyle: {
      //     color: this.colors.text,
      //     fontWeight: 400,
      //     fontSize: 14
      //   }
      // },
      legend: {
        top: 0,
        // bottom: 16,
        // right: 16,
        itemHeight: 8,
        itemWidth: 12,
        textStyle: {
          color: this.colors.label
        },
        data: obj.legend.map((item, index) => { return { name: item, icon: icons[index] } }),
      },
      // grid: {
      //   top: 35,
      //   left: 8,
      //   right: 0,
      //   bottom: 0,
      //   containLabel: true
      // },

      color: [this.colors.primary, "#FFEB3B", '#D7D7D7'],
      radar: [{
        center: ["50%", "60%"],
        indicator: obj.indicator,
        radius: '65%',
        shape: 'circle',
        name: {
          textStyle: {
            color: this.colors.label,
          }
        },
        splitArea: {
          areaStyle: {
            color: ['#FEFEFE'],
          }
        },
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#E6E6E6'
          }
        }
      }],
      series: [{
        type: 'radar',
        data: obj.series.map((item, index) => { return { symbolSize: 9, value: item, name: obj.legend[index], symbol: icons[index] } }),
      }]
    }


  }

  /**
   *层次分析
   */
  level(obj) {

    return {
      // title: {
      //   bottom: 18,
      //   top: 16,
      //   left: 14,

      //   text: '层次分析',
      //   textStyle: {
      //     color: this.colors.text,
      //     fontWeight: 400,
      //     fontSize: 14
      //   }
      // },
      legend: {
        top: 0,
        // bottom: 16,
        // right: 16,
        itemHeight: 8,
        itemWidth: 12,
        textStyle: {
          color: this.colors.label
        },
        data: obj.legend,
      },
      grid: {
        top: 55,
        left: 8,
        right: 0,
        bottom: 0,
        containLabel: true
      },
      // grid: {
      //   left: '8%',
      //   right: '8%',
      //   bottom: '5%',
      //   top: '32%',
      //   containLabel: true
      // },
      color: ["#3AB87B", "#D8D8D8", "#C0C0C0"],
      textStyle: {
        color: this.colors.label
      },

      xAxis: [{
        type: 'category',
        axisLabel: {
          rotate: obj.xaxis.length > 5 ? 45 : 0,
        },
        axisTick: {
          show: true
        },
        axisLine: {
          lineStyle: {
            color: this.colors.line
          }
        },
        data: obj.xaxis

      }],
      yAxis: [{
        type: 'value',
        name: "成绩(分)",
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: this.colors.line
          }
        },
        splitLine: {
          lineStyle: {
            color: this.colors.line
          }
        }
      }],
      // tooltip: {
      //   trigger: 'axis',
      //   axisPointer: { // 坐标轴指示器，坐标轴触发有效
      //     type: 'line' // 默认为直线，可选为：'line' | 'shadow'
      //   }
      // },
      series: obj.series.map((item, index) => {
        return {
          name: obj.legend[index],
          type: 'bar',
          barCategoryGap: 15,
          barWidth: 7,
          itemStyle: {
            normal: {
              barBorderRadius: 0
            }
          },
          data: item
        }
      })
    }
  }

  /**
   *成绩趋势
   */
  scoretrend(obj, inverse ? ) {
    return {
      legend: {
        itemHeight: 10,
        itemWidth: 20,
        textStyle: {
          color: this.colors.text
        },
        data: obj.legend,
        left: 'center'
      },
      grid: {
        top: 35,
        left: 8,
        right: 0,
        bottom: 0,
        containLabel: true
      },
      color: ["#CC8DFF", "#4CBE86"],
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: this.colors.label
          }
        },
        axisLine: {
          lineStyle: {
            color: this.colors.line
          },
          onZero: !inverse
        },
        splitLine: {
          lineStyle: {
            color: this.colors.line
          }
        },
        data: obj.category.map(item => { return item.length > 6 ? (item.substr(5) + '\n' + item.substr(0, 4)) + '年' : item })
      },
      yAxis: [{
          min: function(value) {
            return Math.max(value.min - 10, 0);
          },
          // max: 100,
          name: inverse ? '排名' : "得分率 %",
          nameTextStyle: {
            color: this.colors.label
          },
          axisLabel: {
            textStyle: {
              color: this.colors.label
            }
          },
          axisLine: {
            lineStyle: {
              color: this.colors.line
            }
          },
          splitLine: {
            lineStyle: {
              color: this.colors.line
            }
          },
          inverse: inverse,
          nameLocation: inverse ? 'start' : 'end',
          minInterval: 1,
        },
        {
          type: 'value',
          position: 'right',
          axisLine: {
            lineStyle: {
              color: this.colors.line
            }
          }
        }
      ],
      series: obj.series.map((item, index) => {
        return {
          name: obj.legend[index],
          type: 'line',
          smooth: true,
          symbolSize: 7,
          data: item,
          label: {
            normal: {
              show: false,
              position: 'top' //值显示
            }
          }
        }

      })
    }
  }


}

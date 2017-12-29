import { Injectable } from '@angular/core';

/*
  Generated class for the ChartsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChartsProvider {
  colors: { primary, line, label, text, shadow, series: string[] } = {
    primary: '#f66e4f',
    line: "rgba(0,0,0,.05)",
    label: "#666",
    text: '#414a60',
    shadow: 'rgba(246,110,79,.75)',
    series: ['rgba(246, 110, 79,.7)', "rgba(204, 141, 255,.7)", "rgba(76, 190, 134,.7)"]
  }
  shadow: string = 'padding: 8px 8px 5px 8px;text-align:left;box-shadow: 1px 5px 10px ' + this.colors.primary + ';'
  constructor() {
    console.log('Hello ChartsProvider Provider');
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
      color: [this.colors.series[0]],
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
  radar(obj: { legend, indicator, series, offset }) {
    //icons = ['rect', 'circle', 'triangle'],
    //const colour = [this.colors.primary, "#CC8DFF", "#4CBE86"];
    obj.indicator.push(obj.indicator[0]);
    return {
      legend: {
        top: 0,
        itemHeight: 8,
        itemWidth: 12,
        textStyle: {
          color: this.colors.label
        },
        data: obj.legend //.map((item, index) => { return { name: item, icon: icons[index] } }),
      },

      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        },
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontSize: '12'
        },
        backgroundColor: this.colors.shadow,
        extraCssText: this.shadow,
        formatter: function(params) {
          if (!params) { return }
          let index = params[0].dataIndex,
            res = [];
          for (let i = 0; i < obj.legend.length; i++) {
            res.push(`${obj.legend[i]}：${(obj.series[i][index]-obj.offset).toFixed(2)}`);
          }
          return res.join('<br>');
        },
      },
      angleAxis: {
        splitNumber: obj.indicator.length - 1,
        maxInterval: 1,
        minInterval: 1,
        interval: 1,
        axisLabel: {
          formatter: function(value, index) {
            return obj.indicator[index];
          },
          color: this.colors.label,
        },
        boundaryGap: false,
        color: '#fff',
        splitLine: {
          lineStyle: {
            color: this.colors.line,
          }
        },
        axisLine: {
          lineStyle: {
            color: this.colors.line,
          },
          opacity: .6
        },
        axisTick: {
          show: false
        }

      },
      radiusAxis: {
        splitNumber: 3,
        axisLine: {
          lineStyle: {
            color: this.colors.line,
          }
        },
      },

      polar: {
        center: ['50%', '55%'],
        radius: '67%'
      },

      series: obj.series.map((item, index) => {
        item.push(item[0]);
        return {
          type: 'line',
          data: item.map((sub, subIndex) => { return [sub, subIndex] }), //obj.series[index],
          coordinateSystem: 'polar',
          name: obj.legend[index],
          //stack: 'a',
          //symbol: icons[index],
          //symbolSize: 7,
          itemStyle: {
            normal: {
              color: this.colors.series[index],
            }
          }
        }
      })

    }
  }

  /**
   *层次分析
   */
  level(obj) {

    return {
      tooltip: {
        trigger: 'axis',
        backgroundColor: this.colors.shadow,
        textStyle: {
          fontSize: 12
        },
        extraCssText: this.shadow,
      },
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
      color: this.colors.series,
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
  scoretrend(obj) {
    return {
      tooltip: {
        trigger: 'axis',
        backgroundColor: this.colors.shadow,
        textStyle: {
          fontSize: 12
        },
        extraCssText: this.shadow,
        formatter: function(params) {
          if (params) {
            let index = params[0].dataIndex;
            let res = obj.category[index] + '<br/>';
            res += '满分：' + obj.full[0][index] + '<br/>';
            res += obj.legend[0] + '：' + obj.score[0][index] + '<br/>';
            res += obj.avg[0][index]['name'] + '：' + obj.avg[0][index]['value'];
            return res;
          }
        },
      },
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
      color: this.colors.series.slice(1),
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
          onZero: true
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
          name: "得分率 %",
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
          nameLocation: 'end',
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




  /**
   *排名趋势
   */

  ranktrend(obj, name) {
    return {
      tooltip: {
        trigger: 'axis',
        backgroundColor: this.colors.shadow,
        textStyle: {
          fontSize: 12
        },
        extraCssText: this.shadow,
      },
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
      color: this.colors.series.slice(1),
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
          onZero: false
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
          name: name,
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
          inverse: true,
          nameLocation: 'start',
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

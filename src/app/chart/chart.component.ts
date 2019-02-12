import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  dataSource_red: Object;
  chartConfig_red: Object;
  dataSource_blue: Object;
  chartConfig_blue: Object;
  dataSource_green: Object;
  chartConfig_green: Object;
  dataSource: Object;
  chartConfig: Object;
  selectedFile: File;

  multiArray = [];
  jan_red = 0; jan_green = 0; jan_blue = 0;
  feb_red = 0; feb_green = 0; feb_blue = 0;
  mar_red = 0; mar_green = 0; mar_blue = 0;
  apr_red = 0; apr_green = 0; apr_blue = 0;
  may_red = 0; may_green = 0; may_blue = 0;
  june_red = 0; june_green = 0; june_blue = 0;
  july_red = 0;july_green = 0; july_blue = 0;
  aug_red = 0; aug_green = 0; aug_blue = 0;
  sep_red = 0; sep_green = 0; sep_blue = 0;
  oct_red = 0; oct_green = 0; oct_blue = 0;
  nov_red = 0; nov_green = 0; nov_blue = 0;
  dec_red = 0; dec_green = 0; dec_blue = 0;
  jan = 0; feb = 0; mar = 0;apr = 0;may = 0;june = 0;july = 0;aug = 0;sep = 0;oct = 0;nov = 0;dec = 0;

  datas = [];
  datas_red = [];
  datas_green = [];
  datas_blue = [];
  reason;
  errorCount = 0;
  id;

  constructor(private http: Http, private httpC: HttpClient, private router: Router) {
  }

  ngOnInit() {
    const current_month = new Date().getUTCMonth();
    const month = this.months[current_month];
    
    const urlArray = this.router.url.split('/');
    this.id = urlArray[urlArray.length - 1];

    this.chartConfig_red = {
      width: '1200',
      height: '500',
      type: 'column2d',
      dataFormat: 'json',
    };
    this.chartConfig_blue = {
      width: '1200',
      height: '500',
      type: 'column2d',
      dataFormat: 'json',
    };
    this.chartConfig_green = {
      width: '1200',
      height: '500',
      type: 'column2d',
      dataFormat: 'json',
    };
    this.chartConfig = {
      width: '1200',
      height: '500',
      type: 'column2d',
      dataFormat: 'json',
    };

    const qID = this.id; 
    // id
    this.http.get(`http://localhost:3000/coodinates/${qID}`).toPromise().then(res => {
      const resl = res.json();
      console.log(resl);
      for(const data of resl) {
        console.log(data.coordinates);
        const arrry = data.coordinates
        this.multiArray = [...this.multiArray, ...arrry]
        console.log(this.multiArray)
      }
    }).then(re => {
      
    });
    setTimeout(() => { 
      for (const arr of this.multiArray) {
        if (arr.type === 'red') {
          if (arr.month === 'JAN') {
            this.jan_red = this.jan_red + arr.count;
            this.datas_red.push({
              label: 'Jan',
              value: this.jan_red
            });
          } else if (arr.month === 'FEB') {
            this.feb_red = this.feb_red + arr.count;
            this.datas_red.push({
              label: 'Feb',
              value: this.feb_red
            });
          } else if (arr.month === 'MAR') {
            this.mar_red = this.mar_red + arr.count;
            this.datas_red.push({
              label: 'Mar',
              value: this.mar_red
            });
          } else if (arr.month === 'APR') {
            this.mar_red = this.mar_red + arr.count;
            this.datas_red.push({
              label: 'Apr',
              value: this.mar_red
            });
          } else if (arr.month === 'MAY') {
            this.mar_red = this.mar_red + arr.count;
            this.datas_red.push({
              label: 'May',
              value: this.mar_red
            });
          } else if (arr.month === 'JUNE') {
            this.mar_red = this.mar_red + arr.count;
            this.datas_red.push({
              label: 'June',
              value: this.mar_red
            });
          } else if (arr.month === 'JULY') {
            this.mar_red = this.mar_red + arr.count;
            this.datas_red.push({
              label: 'july',
              value: this.mar_red
            });
          } else if (arr.month === 'AUG') {
            this.mar_red = this.mar_red + arr.count;
            this.datas_red.push({
              label: 'Aug',
              value: this.mar_red
            });
          } else if (arr.month === 'SEP') {
            this.mar_red = this.mar_red + arr.count;
            this.datas_red.push({
              label: 'Sep',
              value: this.mar_red
            });
          } else if (arr.month === 'OCT') {
            this.mar_red = this.mar_red + arr.count;
            this.datas_red.push({
              label: 'Oct',
              value: this.mar_red
            });
          } else if (arr.month === 'NOV') {
            this.mar_red = this.mar_red + arr.count;
            this.datas_red.push({
              label: 'Nov',
              value: this.mar_red
            });
          } else if (arr.month === 'DEC') {
            this.mar_red = this.mar_red + arr.count;
            this.datas_red.push({
              label: 'Dec',
              value: this.mar_red
            });
          }
        } else if (arr.type === 'green') {
          if (arr.month === 'JAN') {
            this.jan_green = this.jan_green + arr.count;
            this.datas_green.push({
              label: 'Jan',
              value: this.jan_green
            });
          } else if (arr.month === 'FEB') {
            this.feb_green = this.feb_green + arr.count;
            this.datas_green.push({
              label: 'Feb',
              value: this.feb_green
            });
          } else if (arr.month === 'MAR') {
            this.mar_green = this.mar_green + arr.count;
            this.datas_green.push({
              label: 'Mar',
              value: this.mar_green
            });
          } else if (arr.month === 'APR') {
            this.mar_green = this.mar_green + arr.count;
            this.datas_green.push({
              label: 'Apr',
              value: this.mar_green
            });
          } else if (arr.month === 'MAY') {
            this.feb_green = this.feb_green + arr.count;
            this.datas_green.push({
              label: 'may',
              value: this.feb_green
            });
          } else if (arr.month === 'JUNE') {
            this.feb_green = this.feb_green + arr.count;
            this.datas_green.push({
              label: 'june',
              value: this.feb_green
            });
          } else if (arr.month === 'JULY') {
            this.feb_green = this.feb_green + arr.count;
            this.datas_green.push({
              label: 'july',
              value: this.feb_green
            });
          } else if (arr.month === 'AUG') {
            this.feb_green = this.feb_green + arr.count;
            this.datas_green.push({
              label: 'aug',
              value: this.feb_green
            });
          } else if (arr.month === 'SEP') {
            this.feb_green = this.feb_green + arr.count;
            this.datas_green.push({
              label: 'sep',
              value: this.feb_green
            });
          } else if (arr.month === 'OCT') {
            this.feb_green = this.feb_green + arr.count;
            this.datas_green.push({
              label: 'oct',
              value: this.feb_green
            });
          } else if (arr.month === 'NOV') {
            this.feb_green = this.feb_green + arr.count;
            this.datas_green.push({
              label: 'nov',
              value: this.feb_green
            });
          } else if (arr.month === 'DEC') {
            this.feb_green = this.feb_green + arr.count;
            this.datas_green.push({
              label: 'dec',
              value: this.feb_green
            });
            
          }
        } else if (arr.type === 'blue') {
          if (arr.month === 'JAN') {
            this.jan_blue = this.jan_blue + arr.count;
            this.datas_blue.push({
              label: 'Jan',
              value: this.jan_blue
            });
          } else if (arr.month === 'FEB') {
            this.feb_blue = this.feb_blue + arr.count;
            this.datas_blue.push({
              label: 'Feb',
              value: this.feb_blue
            });
          } else if (arr.month === 'MAR') {
            this.mar_blue = this.mar_blue + arr.count;
            this.datas_blue.push({
              label: 'Mar',
              value: this.mar_blue
            });
          } else if (arr.month === 'APR') {
            this.mar_blue = this.mar_blue + arr.count;
            this.datas_blue.push({
              label: 'Apr',
              value: this.mar_blue
            });
          } else if (arr.month === 'MAY') {
            this.mar_blue = this.mar_blue + arr.count;
            this.datas_blue.push({
              label: 'may',
              value: this.mar_blue
            });
          } else if (arr.month === 'JUNE') {
            this.mar_blue = this.mar_blue + arr.count;
            this.datas_blue.push({
              label: 'june',
              value: this.mar_blue
            });
          } else if (arr.month === 'JULY') {
            this.mar_blue = this.mar_blue + arr.count;
            this.datas_blue.push({
              label: 'july',
              value: this.mar_blue
            });
          } else if (arr.month === 'AUG') {
            this.mar_blue = this.mar_blue + arr.count;
            this.datas_blue.push({
              label: 'aug',
              value: this.mar_blue
            });
          } else if (arr.month === 'SEP') {
            this.mar_blue = this.mar_blue + arr.count;
            this.datas_blue.push({
              label: 'sep',
              value: this.mar_blue
            });
          } else if (arr.month === 'OCT') {
            this.mar_blue = this.mar_blue + arr.count;
            this.datas_blue.push({
              label: 'oct',
              value: this.mar_blue
            });
          } else if (arr.month === 'NOV') {
            this.mar_blue = this.mar_blue + arr.count;
            this.datas_blue.push({
              label: 'nov',
              value: this.mar_blue
            });
          } else if (arr.month === 'DEC') {
            this.mar_blue = this.mar_blue + arr.count;
            this.datas_blue.push({
              label: 'dec',
              value: this.mar_blue
            });
          }
        }
  
        // get Month
        if (arr.month === month) {
          this.errorCount = this.errorCount + arr.count;
        }
        // For All
  
  
        if (arr.month === 'JAN') {
          this.jan = this.jan + arr.count;
          this.datas.push({
            label: 'Jan',
            value: this.jan
          });
        } else if (arr.month === 'FEB') {
          this.feb = this.feb + arr.count;
          this.datas.push({
            label: 'Feb',
            value: this.feb
          });
        } else if (arr.month === 'MAR') {
          this.mar = this.mar + arr.count;
          this.datas.push({
            label: 'Mar',
            value: this.mar
          });
        } else if (arr.month === 'APR') {
          this.mar = this.mar + arr.count;
          this.datas.push({
            label: 'Apr',
            value: this.mar
          });
        } else if (arr.month === 'MAY') {
          this.mar = this.mar + arr.count;
          this.datas.push({
            label: 'May',
            value: this.mar
          });
        } else if (arr.month === 'JUNE') {
          this.mar = this.mar + arr.count;
          this.datas.push({
            label: 'June',
            value: this.mar
          });
        } else if (arr.month === 'JULY') {
          this.mar = this.mar + arr.count;
          this.datas.push({
            label: 'july',
            value: this.mar
          });
        } else if (arr.month === 'AUG') {
          this.mar = this.mar + arr.count;
          this.datas.push({
            label: 'Aug',
            value: this.mar
          });
        } else if (arr.month === 'SEP') {
          this.mar = this.mar + arr.count;
          this.datas.push({
            label: 'Sep',
            value: this.mar
          });
        } else if (arr.month === 'OCT') {
          this.mar = this.mar + arr.count;
          this.datas.push({
            label: 'Oct',
            value: this.mar
          });
        } else if (arr.month === 'NOV') {
          this.mar = this.mar + arr.count;
          this.datas.push({
            label: 'Nov',
            value: this.mar
          });
        } else if (arr.month === 'DEC') {
          this.mar = this.mar + arr.count;
          this.datas.push({
            label: 'Dec',
            value: this.mar
          });
        }
  
      }
  
      this.dataSource_red = {
        chart: {
          caption: 'Stitches and Seems',
          xAxisName: 'Months',
          yAxisName: 'Count',
          numberSuffix: '',
          theme: 'fusion',
        },
        data: [
          {
            label: 'Jan',
            value: this.jan_red
          },
          {
            label: 'Feb',
            value: this.feb_red
          },
          {
            label: 'Mar',
            value: this.mar_red
          },
          {
            label: 'Apr',
            value: this.apr_red
          },
          {
            label: 'May',
            value: this.apr_red
          },
          {
            label: 'June',
            value: this.apr_red
          },
          {
            label: 'July',
            value: this.apr_red
          },
          {
            label: 'Aug',
            value: this.apr_red
          },
          {
            label: 'Sep',
            value: this.apr_red
          },
          {
            label: 'Oct',
            value: this.apr_red
          },
          {
            label: 'Nov',
            value: this.apr_red
          },
          {
            label: 'Dec',
            value: this.apr_red
          }
        ]
      };
      this.dataSource_blue = {
        chart: {
          caption: 'Stain patches(Oil Marks)',
          xAxisName: 'Months',
          yAxisName: 'Count',
          numberSuffix: '',
          theme: 'fusion',
        },
        data: [
          {
            label: 'Jan',
            value: this.jan_blue
          },
          {
            label: 'Feb',
            value: this.feb_blue
          },
          {
            label: 'Mar',
            value: this.mar_blue
          },
          {
            label: 'Apr',
            value: this.apr_blue
          },
          {
            label: 'May',
            value: this.may_blue
          },
          {
            label: 'June',
            value: this.june_blue
          },
          {
            label: 'July',
            value: this.july_blue
          },
          {
            label: 'Aug',
            value: this.aug_blue
          },
          {
            label: 'Sep',
            value: this.sep_blue
          },
          {
            label: 'Aug',
            value: this.aug_blue
          },
          {
            label: 'Sep',
            value: this.sep_blue
          },
          {
            label: 'Oct',
            value: this.oct_blue
          },
          {
            label: 'Dec',
            value: this.dec_blue
          }
        ]
      };
      this.dataSource_green = {
        chart: {
          caption: 'Fabric defects',
          xAxisName: 'Months',
          yAxisName: 'Count',
          numberSuffix: '',
          theme: 'fusion',
        },
        data: [
          {
            label: 'Jan',
            value: this.jan_green
          },
          {
            label: 'Feb',
            value: this.feb_green
          },
          {
            label: 'Mar',
            value: this.mar_green
          },
          {
            label: 'Apr',
            value: this.apr_green
          },
          {
            label: 'May',
            value: this.may_green
          },
          {
            label: 'June',
            value: this.june_green
          },
          {
            label: 'July',
            value: this.july_green
          },
          {
            label: 'Aug',
            value: this.aug_green
          },
          {
            label: 'Sep',
            value: this.sep_green
          },
          {
            label: 'Oct',
            value: this.oct_green
          },
          {
            label: 'Nov',
            value: this.nov_green
          },
          {
            label: 'Dec',
            value: this.dec_green
          }
        ]
      };
  
      this.dataSource = {
        chart: {
          caption: 'Total Defects',
          xAxisName: 'Months',
          yAxisName: 'Count',
          numberSuffix: '',
          theme: 'fusion',
        },
        data: [
          {
            label: 'Jan',
            value: this.jan
          },
          {
            label: 'Feb',
            value: this.feb
          },
          {
            label: 'Mar',
            value: this.mar
          },
          {
            label: 'Apr',
            value: this.apr
          },
          {
            label: 'May',
            value: this.may
          },
          {
            label: 'June',
            value: this.june
          },
          {
            label: 'July',
            value: this.july
          },
          {
            label: 'Aug',
            value: this.aug
          },
          {
            label: 'Sep',
            value: this.sep
          },
          {
            label: 'Oct',
            value: this.oct
          },
          {
            label: 'nov',
            value: this.nov
          },
          {
            label: 'Dec',
            value: this.dec
          }
        ]
      };

    }, 2000);
    
  }



  sendAlert() {
    console.log(this.reason);
    const current_date = new Date().getTime();
    const alert = {
      reason: this.reason,
      createsDate: current_date,
      status: 'proccessing',
      errorCount: this.errorCount,
      qualityCheckerID: this.id
    };
    console.log(alert);
    this.http.post('http://localhost:3000/alerts', alert).subscribe(res => {
      console.log(res);
      this.reason = '';
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    // this.http is the injected HttpClient
    const fd = new FormData();
    fd.append('imageUrl', this.selectedFile, this.selectedFile.name);
    this.http.patch(`http://localhost:3000/user/imageurl/${this.id}`, fd).subscribe(
      //map the success function and alert the response
       (success) => {
               alert(success);
      },
      (error) => alert(error));


  }

}

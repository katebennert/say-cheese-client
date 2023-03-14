# Say Cheese

Say Cheese is a single page web application that models part of the relationship between freelancers that are hoping to be assigned to a single job. The user can create a new job, create a new freelancer, update the job a freelancer is assigned to, and/or delete a job. 

## Installation

Fork and clone this repository onto your local machine. To start the server run:
```
bundle exec rake server
```

The client for this project is [located here](https://github.com/katebennert/say-cheese-client). To install the dependencies run:
```
npm install
```

To launch the app, from say-cheese-client run:
```
npm start
```

## Usage

Say Cheese acts as a middleman for a network of freelancers who are looking for jobs. 

Create: Say Cheese allows you to create a new job or a new freelancer. You can also view a list of freelancers or jobs.

Assign Freelancers to Jobs:
From the job show page for a single job, you can view a list of available freelancers to assign to that job. The freelancer is updated to "unavailable" and the job is updated to require one less freelancer. 
![assign-freelancers](https://lh3.googleusercontent.com/n6LmSroZN3jo6x-N9ZPD8BYy-X_8v2yor36R9SDyBXoJ-T0SH6TsqNfvhlfi4XQrm5WWa8zqJYIpS13591mGCwDjXuDTycs8KY_EaytCIVHRP90-U2jxP2NVdjb82HF_WEmj2hy3mN82w11Rvb9vDHa0FCCMRr7C6zmz_rRyi6c-U3bH4ABttdWMDMd-vRRF-5VqcG5LDL_mfD23TR8bE4kWHpLANHvrulh_B9L0wSq5qeL7R76K1uekCn_W80L4P0NR4Vw2pHZERFSZ4x-EIpkvJcPje2zeLUTuYQLpMJZ2N_OniwLJDINAfgXeSTuwXt0-ismanqJ10Um3z6Kc8o1q5Wmzp8MIGmcGZunixrCQmshhhMbWHZts7NSv7w3WXGV1bvXbAk3qajSdoesRqQzqOxWfPr62H7JMuWQ6PHQNV_ZV8Ux3ZjSOwnlk5akQ-HXb6Xt2G7NJ2W7LdV7kv8qOuC8gDvIeADb6lAaz6Nha-9DKDWzdNidhG2i_m9AjmZ9J52ybHH11Bqk5KjclvL2mRud3uOhb2g6JP0MYLYEO9wiPI98FNwltl0nVhwmjY1N5Ak9-KmucmiA1W7CYE8mtiN-hS5gn7xpth9IUXwVs41Apyjj40J_ye4vUGPCKzWLwTtJFKdDcW_vxPbdVkWCdIiWlW5sJhqWZm3meAb59rVUwa6qhE6FEx-VcS6HCDLOYgAKxTaXZZG8JFMcJgm_ZRoIn7STCnIB8RZ7jJ0GYe45H598T-HcpOlQ_HkJj3Sn8SHaEyY1yCdrlviFAMDmm-ZYkfswfpdJwWWjVyKKL1Rq1gyPl_7iPqHtBmMS0POwyYlWPdD7U9sIdsCKZQuzGUSGAvjwJ4usiGL9vYOZbg51Xtkd_0GtZCrenUJY3qKzVo3vgTyIuRvwAmTZ8SSJpBwoWwV_uYU9IohjyacpB4KL0mQ=w1100-h930-no?authuser=0)

Delete a Job:
When a job is deleted, all freelancers on the project are updated to become available and their job_id is returned to null.

## Credits

Images in this project are from [UNSPLASH](https://unsplash.com/).

## License

[MIT](https://choosealicense.com/licenses/mit/)
# Basic

## CloudWatch 是什么？我们为什么要使用CloudWatch？
  what: Amazon CloudWatch 实时监控您的 Amazon Web Services (AWS) 资源以及您在 AWS 中运行的应用程序。您可以使用 CloudWatch 收集和跟踪指标，这些指标是您可衡量的相关资源和应用程序的变量。

  CloudWatch 主页自动显示有关您使用的每项 AWS 服务的指标。此外，您还可以创建自定义控制面板，以显示有关自定义应用程序的指标，并显示您选择的指标的自定义集合。
  why: 您可以创建警报，这些警报监视指标，当超出阈值时，它们会发送通知或者对您所监控的资源自动进行更改。例如，您可以监控您的 Amazon EC2 实例的 CPU 使用率以及磁盘读写情况，然后使用此数据确定您是否应启动其他实例来处理增加的负载。您还可以使用此数据停止未完全利用的实例以节省开支。您可通过使用 CloudWatch 全面地了解资源使用率、应用程序性能和运行状况。
##  CloudWatch中的metrics是什么？包括哪些种类？我们可以如何使用metrics？
what: 指标是关于您的系统性能的数据。默认情况下，许多服务都提供资源（例如，Amazon EC2 实例、Amazon EBS 卷和 Amazon RDS 数据库实例）的免费指标。您也可以启用对某些资源（如 Amazon EC2 实例）的详细监控，或发布自己的应用程序指标。Amazon CloudWatch 可加载您的账户中的所有指标（包括您提供的 AWS 资源指标和应用程序指标）以进行搜索、绘制图表及设置警报。指标数据的保留期限为 15 个月，这使您能够查看最新数据和历史数据。
which: https://docs.aws.amazon.com/zh_cn/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html
how: ...
##  CloudWatch Events是什么？可以应用在哪些场景？
what: Amazon CloudWatch Events 提供近乎实时的系统事件流，这些系统事件描述 Amazon Web Services (AWS) 资源的变化。通过使用可快速设置的简单规则，您可以匹配事件并将事件路由到一个或多个目标函数或流。CloudWatch Events 会在发生操作更改时感知到这些更改。
where: CloudWatch Events 将响应这些操作更改并在必要时采取纠正措施，方式是发送消息以响应环境、激活函数、进行更改并捕获状态信息。
您还可以使用 CloudWatch Events 来计划使用 cron 或 rate 表达式在某些时间自行触发的自动化操作。有关更多信息，请参阅规则的计划表达式。
##  相关概念理解：metrics，periods，namespace，count，dimensions，statistics。

* metrics:https://docs.aws.amazon.com/zh_cn/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Metric
* periods: 
* namespace: https://docs.aws.amazon.com/zh_cn/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace
* count: 
* dimensions: https://docs.aws.amazon.com/zh_cn/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension
* statistics: https://docs.aws.amazon.com/zh_cn/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic
# Practice

## 创建cloudwatch event rules，每分钟自动触发Lambda（Lambda功能需要自己实现，向cloudwatch metrics里push自定义的metrics），设置alarm检测task中定义的metric，自定义并监控条件使alarm触发阈值，alarm出发SNS，SNS发告警到邮箱。


## 创建cloudwatch event rules，每分钟自动触发Lambda（输出固定格式的log message）。为lambda log创建metric filter，匹配log message，创建新的metric，自定义并监控条件使alarm触发阈值，alarm出发SNS，SNS发告警到邮箱。

# Output：

## 两个cloudformation文件
## 部署cloudformation后，功能完整，邮箱可以收到报警

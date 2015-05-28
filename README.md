# Message Bubble Generator #
#消息气泡生成器 #
### jQuery Plugin  ###
    $(".demo").mbg({
    	messageWidth: 300,
    	messageHeight: 100,
    	borderColor: "285171",
    	bgColor: "dad4d9",
    	borderWidth: 5,
    	bubbleWidth: 30,
    	bubbleHeight: 60
    });
可以为目标选择器再次设置CSS的position属性来调整位置。<br>
插件属性一览：
----------
<table>
	<tr>
		<td></td>
		<td>属性名称</td>
		<td>类型</td>
		<td>默认值</td>
	</tr>
	<tr>
		<td>messageWidth</td>
		<td>消息宽度</td>
		<td>数字</td>
		<td>200</td>
	</tr>
	<tr>
		<td>messageHeight</td>
		<td>消息高度</td>
		<td>数字</td>
		<td>50</td>
	</tr>
	<tr>
		<td>bubbleWidth</td>
		<td>气泡宽度</td>
		<td>数字</td>
		<td>20</td>
	</tr>
	<tr>
		<td>bubbleHeight</td>
		<td>气泡高度</td>
		<td>数字</td>
		<td>50</td>
	</tr>
	<tr>
		<td>bubblePosition</td>
		<td>气泡位置</td>
		<td>字符“middle”或者数字，数字代表距离左边的百分比</td>
		<td>50</td>
	</tr>
	<tr>
		<td>borderWidth</td>
		<td>消息气泡边框宽度</td>
		<td>数字</td>
		<td>2</td>
	</tr>
	<tr>
		<td>borderRadius</td>
		<td>消息气泡圆角</td>
		<td>数字</td>
		<td>10</td>
	</tr>
	<tr>
		<td>bgColor</td>
		<td>消息气泡背景色</td>
		<td>字符</td>
		<td>“FFFFFF”</td>
	</tr>
	<tr>
		<td>borderColor</td>
		<td>消息气泡边框颜色</td>
		<td>字符</td>
		<td>“FFA609”</td>
	</tr>
</table>
DEMO：
----------
<a href="#">http://moshe444.github.io/messageBubble/</a>
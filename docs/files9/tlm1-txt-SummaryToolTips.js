﻿NDSummary.OnToolTipsLoaded("File9:tlm1.txt",{1490:"<div class=\"NDToolTip TSection LTextFile\"><div class=\"TTSummary\">Each TLM1 interface is either blocking, non-blocking, or a combination of these two.</div></div>",1491:"<div class=\"NDToolTip TGroup LTextFile\"><div class=\"TTSummary\">The unidirectional TLM interfaces consist of blocking, non-blocking, and combined blocking and non-blocking variants of the ~put~, ~get~ and ~peek~ interfaces, plus a non-blocking ~analysis~ interface.</div></div>",1492:"<div class=\"NDToolTip TInformation LTextFile\"><div class=\"TTSummary\">The ~put~ interfaces are used to send, or ~put~, transactions to other components.&nbsp; Successful completion of a put guarantees its delivery, not execution.</div></div>",1493:"<div class=\"NDToolTip TInformation LTextFile\"><div class=\"TTSummary\">The ~get~ interfaces are used to retrieve transactions from other components.&nbsp; The ~peek~ interfaces are used for the same purpose, except the retrieved transaction is not consumed; successive calls to ~peek~ will return the same object. Combined ~get_peek~ interfaces are also defined.</div></div>",1494:"<div class=\"NDToolTip TInformation LTextFile\"><div class=\"TTSummary\">The UVM provides unidirectional ports, exports, and implementation ports for connecting your components via the TLM interfaces.</div></div>",1495:"<div class=\"NDToolTip TGroup LTextFile\"><div class=\"TTSummary\">The bidirectional interfaces consist of blocking, non-blocking, and combined blocking and non-blocking variants of the ~transport~, ~master~, and ~slave~ interfaces.</div></div>",1496:"<div class=\"NDToolTip TInformation LTextFile\"><div class=\"TTSummary\">The ~transport~ interface sends a request transaction and returns a response transaction in a single task call, thereby enforcing an in-order execution semantic. The request and response transactions can be different types.</div></div>",1497:"<div class=\"NDToolTip TInformation LTextFile\"><div class=\"TTSummary\">The primitive, unidirectional ~put~, ~get~, and ~peek~ interfaces are combined to form bidirectional master and slave interfaces.&nbsp; The master puts requests and gets or peeks responses. The slave gets or peeks requests and puts responses. Because the put and the get come from different function interface methods, the requests and responses are not coupled as they are with the ~transport~ interface.</div></div>",1498:"<div class=\"NDToolTip TInformation LTextFile\"><div class=\"TTSummary\">The UVM provides bidirectional ports, exports, and implementation ports for connecting your components via the TLM interfaces.</div></div>",1499:"<div class=\"NDToolTip TGroup LTextFile\"><div class=\"TTSummary\">This example illustrates basic TLM connectivity using the blocking put inteface.</div></div>"});
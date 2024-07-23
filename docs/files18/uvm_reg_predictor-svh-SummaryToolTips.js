﻿NDSummary.OnToolTipsLoaded("File18:uvm_reg_predictor.svh",{306:"<div class=\"NDToolTip TSection LSystemVerilog\"><div class=\"TTSummary\">The uvm_reg_predictor class defines a predictor component, which is used to update the register model\'s mirror values based on transactions explicitly observed on a physical bus.</div></div>",307:"<div class=\"NDToolTip TClass LSystemVerilog\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype307\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">uvm_reg_predictor<span class=\"TemplateSignature\"> #(<span class=\"SHKeyword\">type</span> BUSTYPE=<span class=\"SHKeyword\">int</span>)</span></div></div></div><div class=\"TTSummary\">Updates the register model mirror based on observed bus transactions</div></div>",309:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype309\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/3/2\">uvm_analysis_imp #(</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"2/3/3/4\" style=\"grid-area:1/4/2/5\">BUSTYPE,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">uvm_reg_predictor&nbsp;</div><div class=\"PSymbols\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">#(</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\">BUSTYPE)</div><div class=\"PAfterParameters\" data-WideGridArea=\"2/5/3/6\" data-NarrowGridArea=\"4/1/5/5\" style=\"grid-area:2/5/3/6\">) bus_in</div></div></div></div><div class=\"TTSummary\">Observed bus transactions of type ~BUSTYPE~ are received from this port and processed.</div></div>",310:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype310\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\">uvm_analysis_port #(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_reg_item</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">) reg_ap</div></div></div></div><div class=\"TTSummary\">Analysis output port that publishes uvm_reg_item transactions converted from bus transactions received on ~bus_in~.</div></div>",311:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype311\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uvm_reg_map map</div></div><div class=\"TTSummary\">The map used to convert a bus address to the corresponding register or memory handle. Must be configured before the run phase.</div></div>",312:"<div class=\"NDToolTip TVariable LSystemVerilog\"><div id=\"NDPrototype312\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uvm_reg_adapter adapter</div></div><div class=\"TTSummary\">The adapter used to convey the parameters of a bus operation in terms of a canonical uvm_reg_bus_op datum.&nbsp; The uvm_reg_adapter must be configured before the run phase.</div></div>",314:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype314\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">function</span> new (</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\"><span class=\"SHKeyword\">string</span>&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">name,</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">uvm_component&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">parent</div><div class=\"PAfterParameters\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"4/1/5/4\" style=\"grid-area:2/4/3/5\">)</div></div></div></div><div class=\"TTSummary\">Create a new instance of this type, giving it the optional ~name~ and ~parent~.</div></div>",315:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype315\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">virtual function void</span> pre_predict(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_reg_item&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">rw</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">Override this method to change the value or re-direct the target register</div></div>",316:"<div class=\"NDToolTip TFunction LSystemVerilog\"><div id=\"NDPrototype316\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">virtual function void</span> check_phase(</div><div class=\"PType InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">uvm_phase&nbsp;</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">phase</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/4/2/5\" data-NarrowGridArea=\"3/1/4/4\" style=\"grid-area:1/4/2/5\">)</div></div></div></div><div class=\"TTSummary\">Checks that no pending register transactions are still enqueued.</div></div>"});